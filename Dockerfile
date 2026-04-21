# ============================================================
# Stage 1: deps — Install dependencies only
# ============================================================
FROM node:22-alpine AS deps

# Add libc compatibility for native modules (e.g. @next/swc)
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy lock files first for better layer caching
COPY package.json package-lock.json ./

RUN npm ci --omit=dev


# ============================================================
# Stage 2: builder — Build the Next.js application
# ============================================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy installed node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy entire project source
COPY . .

# Build args for public env vars (NEXT_PUBLIC_* must be available at build time)
ARG NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
ENV NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=$NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build


# ============================================================
# Stage 3: runner — Minimal production image
# ============================================================
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser  --system --uid 1001 nextjs

# Copy only the artifacts needed to run the app
COPY --from=builder /app/public       ./public
COPY --from=builder /app/.next/standalone  ./
COPY --from=builder /app/.next/static ./.next/static

# Ownership for the non-root user
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# server.js is produced by Next.js standalone output
CMD ["node", "server.js"]
