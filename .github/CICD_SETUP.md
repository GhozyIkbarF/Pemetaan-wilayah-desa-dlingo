# GitHub CI/CD Pipeline

Pipeline ini terdiri dari dua workflow yang terpisah:

| Workflow | File | Trigger |
|---|---|---|
| **CI** — Lint & Build Check | `.github/workflows/ci.yml` | Push / PR ke `main` atau `develop` |
| **CD** — Build & Deploy | `.github/workflows/cd.yml` | Push ke `main` saja (atau manual) |

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

| Secret Name | Keterangan |
|---|---|
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API key (digunakan saat build) |
| `DOCKERHUB_USERNAME` | Username Docker Hub kamu |
| `DOCKERHUB_TOKEN` | Access Token Docker Hub ([buat di sini](https://hub.docker.com/settings/security)) |
| `SSH_HOST` | IP atau domain server produksi |
| `SSH_USER` | Username SSH server (contoh: `ubuntu`, `root`) |
| `SSH_PRIVATE_KEY` | Private key SSH (isi konten file `~/.ssh/id_rsa`) |
| `SSH_PORT` | Port SSH server (biasanya `22`) |

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
