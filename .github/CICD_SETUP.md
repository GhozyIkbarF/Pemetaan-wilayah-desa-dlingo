# GitHub CI/CD Pipeline

Pipeline ini terdiri dari dua workflow yang terpisah:

| Workflow                    | File                       | Trigger                            |
| --------------------------- | -------------------------- | ---------------------------------- |
| **CI** — Lint & Build Check | `.github/workflows/ci.yml` | Push / PR ke `main` atau `develop` |
| **CD** — Build & Deploy     | `.github/workflows/cd.yml` | Push ke `main` saja (atau manual)  |

---

## Alur Kerja

```
Push ke develop / PR ──► CI (lint + build check)
Push ke main        ──► CI + CD (build image → push Docker Hub → deploy SSH)
```

---

## Setup GitHub Secrets

Buka repositori di GitHub → **Settings → Secrets and variables → Actions → New repository secret**

### Secrets yang wajib diisi:

| Secret Name                       | Keterangan                                                                         |
| --------------------------------- | ---------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API key (digunakan saat build)                                         |
| `DOCKERHUB_USERNAME`              | Username Docker Hub kamu                                                           |
| `DOCKERHUB_TOKEN`                 | Access Token Docker Hub ([buat di sini](https://hub.docker.com/settings/security)) |
| `SSH_HOST`                        | IP atau domain server produksi                                                     |
| `SSH_USER`                        | Username SSH server (contoh: `ubuntu`, `root`)                                     |
| `SSH_PRIVATE_KEY`                 | Private key SSH (isi konten file `~/.ssh/id_rsa`)                                  |
| `SSH_PORT`                        | Port SSH server (biasanya `22`)                                                    |

### Cara generate SSH Key (jika belum punya):

```bash
# Di komputer lokal
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_deploy

# Salin public key ke server
ssh-copy-id -i ~/.ssh/github_deploy.pub user@your-server-ip

# Isi SSH_PRIVATE_KEY di GitHub dengan isi file:
cat ~/.ssh/github_deploy
```

---

## Setup Docker Hub

1. Buat akun di [hub.docker.com](https://hub.docker.com)
2. Buat repository baru bernama `pemetaan-wilayah`
3. Buat **Access Token**: Account Settings → Security → New Access Token
4. Isi `DOCKERHUB_USERNAME` dan `DOCKERHUB_TOKEN` di GitHub Secrets

---

## GitHub Environment (Opsional — untuk Approval Gate)

Jika ingin deploy ke production memerlukan **persetujuan manual**:

1. Buka **Settings → Environments → New environment**
2. Beri nama `production`
3. Centang **"Required reviewers"** dan tambahkan reviewer

---

## Struktur File

```
.github/
└── workflows/
    ├── ci.yml   # Lint + Build (semua branch)
    └── cd.yml   # Docker build + Deploy (main only)
```

---

name: CD — Build & Deploy

on:
push:
branches: [main] # Trigger hanya saat merge ke main
workflow_dispatch: # Trigger manual dari GitHub UI

env:
DOCKER_IMAGE: ${{ secrets.DOCKERHUB_USERNAME }}/pemetaan-wilayah
CONTAINER_NAME: pemetaan_wilayah_app

jobs:

# ════════════════════════════════════════════════════════════

# JOB 1: Build Docker image & push ke Docker Hub

# ════════════════════════════════════════════════════════════

build-and-push:
name: Build & Push Docker Image
runs-on: ubuntu-latest

    outputs:
      image-tag: ${{ steps.meta.outputs.version }}

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      # Setup Docker Buildx (multi-platform, BuildKit cache)
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      # Login ke Docker Hub
      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      # Generate image tags: latest + git-SHA
      - name: Extract Docker metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.DOCKER_IMAGE }}
          tags: |
            type=raw,value=latest
            type=sha,prefix=sha-,format=short

      # Build & push dengan BuildKit layer cache (GitHub Actions cache)
      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          build-args: |
            NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=${{ secrets.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

# ════════════════════════════════════════════════════════════

# JOB 2: Deploy ke server via SSH

# ════════════════════════════════════════════════════════════

deploy:
name: Deploy to Production Server
runs-on: ubuntu-latest
needs: build-and-push # Tunggu build selesai dulu
environment: production # GitHub Environment (opsional, untuk approval gate)

    steps:
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1.0.3
        env:
          DOCKER_IMAGE: ${{ env.DOCKER_IMAGE }}
          CONTAINER_NAME: ${{ env.CONTAINER_NAME }}
          DOCKERHUB_USERNAME: ${{ secrets.DOCKERHUB_USERNAME }}
          DOCKERHUB_TOKEN: ${{ secrets.DOCKERHUB_TOKEN }}
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          port: ${{ secrets.SSH_PORT }}
          envs: DOCKER_IMAGE,CONTAINER_NAME,DOCKERHUB_USERNAME,DOCKERHUB_TOKEN
          script: |
            # 1. Pindah ke direktori project di server dan update kode (agar sinkron dengan GitHub)
            cd /root/pemetaan-wilayah/Pemetaan-wilayah-desa-dlingo || cd ~/pemetaan-wilayah/Pemetaan-wilayah-desa-dlingo
            git fetch --all
            git reset --hard origin/main
            git pull origin main

            # 2. Login ke Docker Hub di server (penting jika repository image private)
            echo "$DOCKERHUB_TOKEN" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin

            # 3. Pull image terbaru dari Docker Hub
            docker pull $DOCKER_IMAGE:latest

            # 4. Stop & remove container lama (jika ada)
            docker stop $CONTAINER_NAME || true
            docker remove $CONTAINER_NAME || true

            # 5. Jalankan container baru
            docker run -d \
              --name $CONTAINER_NAME \
              --restart unless-stopped \
              -p 3000:3000 \
              -e NODE_ENV=production \
              -e PORT=3000 \
              $DOCKER_IMAGE:latest

            # 6. Hapus image lama yang tidak dipakai (housekeeping)
            docker image prune -f
