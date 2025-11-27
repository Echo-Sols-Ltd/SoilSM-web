# SoilSmart Deployment Guide

## Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher
- Git
- GitHub account
- Vercel account (recommended) or other hosting platform

## Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/Echo-Sols-Ltd/SoilSM-web.git
cd SoilSM-web
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=SoilSmart
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_CONTACT_EMAIL=info@soilsmart.com
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

### Build the Application

```bash
npm run build
```

### Test Production Build Locally

```bash
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the recommended platform for Next.js applications.

#### Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

#### Deploy via GitHub Integration

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure project settings:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Add environment variables
6. Click "Deploy"

### Option 2: Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize Site**
   ```bash
   netlify init
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Option 3: DigitalOcean App Platform

1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Connect your GitHub repository
4. Configure build settings:
   - Build Command: `npm run build`
   - Run Command: `npm start`
5. Add environment variables
6. Deploy

### Option 4: AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Base directory: /
   - Output directory: .next
5. Add environment variables
6. Deploy

### Option 5: Docker

#### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Build and Run Docker Container

```bash
# Build image
docker build -t soilsmart-web .

# Run container
docker run -p 3000:3000 soilsmart-web
```

## Environment Variables for Production

Set these environment variables in your hosting platform:

```env
NEXT_PUBLIC_APP_URL=https://soilsmart.com
NEXT_PUBLIC_APP_NAME=SoilSmart
NEXT_PUBLIC_API_URL=https://api.soilsmart.com
NEXT_PUBLIC_CONTACT_EMAIL=info@soilsmart.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Optional: Google Analytics
```

## Custom Domain Setup

### Vercel

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify

1. Go to "Domain settings"
2. Add custom domain
3. Configure DNS settings

## SSL/HTTPS

All recommended hosting platforms provide automatic SSL certificates via Let's Encrypt.

## Performance Optimization

### 1. Enable Caching

Configure caching headers in `next.config.js`:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ]
  },
}
```

### 2. Image Optimization

Use Next.js Image component for automatic optimization:

```tsx
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority
/>
```

### 3. Enable Compression

Most hosting platforms enable compression by default.

## Monitoring and Analytics

### Google Analytics

1. Get your GA4 measurement ID
2. Add to environment variables: `NEXT_PUBLIC_GA_ID`
3. Implement GA in `layout.tsx`

### Vercel Analytics

Automatically available for Vercel deployments.

## Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

## Rollback Strategy

### Vercel

1. Go to "Deployments"
2. Find previous successful deployment
3. Click "Promote to Production"

### Git-based Rollback

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push origin main --force  # Use with caution
```

## Health Checks

Add a health check endpoint:

```typescript
// src/app/api/health/route.ts
export async function GET() {
  return Response.json({ status: 'ok', timestamp: new Date().toISOString() })
}
```

## Troubleshooting

### Build Failures

1. Check Node.js version compatibility
2. Verify all dependencies are installed
3. Check for TypeScript errors
4. Review build logs

### Runtime Errors

1. Check environment variables
2. Review server logs
3. Test locally with production build
4. Check API connectivity

## Support

For deployment issues:
- Email: dev@soilsmart.com
- GitHub Issues: https://github.com/Echo-Sols-Ltd/SoilSM-web/issues

---

Last Updated: November 2025

