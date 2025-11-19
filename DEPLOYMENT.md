# Deployment Guide - Logi+

## 🚀 Quick Deploy to Vercel

### Prerequisites
- Vercel account (free tier available)
- Git repository

### Steps

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

That's it! Your app will be live in minutes.

---

## 🐳 Docker Deployment

### Create Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

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

### Build and Run

```bash
# Build image
docker build -t logi-plus .

# Run container
docker run -p 3000:3000 logi-plus
```

---

## ☁️ AWS Deployment

### Option 1: AWS Amplify

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Connect your Git repository
   - Amplify will auto-detect Next.js

2. **Configure Build Settings**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Option 2: AWS EC2

```bash
# SSH to EC2 instance
ssh -i your-key.pem ec2-user@your-ec2-ip

# Install Node.js
curl -sL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Install PM2
sudo npm install -g pm2

# Clone and setup
git clone your-repo
cd logi-plus
npm install
npm run build

# Start with PM2
pm2 start npm --name "logi-plus" -- start
pm2 startup
pm2 save
```

---

## 🌐 Netlify Deployment

1. **Connect Repository**
   - Go to Netlify
   - Import from Git

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install command: `npm install`

3. **Deploy**
   - Click "Deploy site"

---

## 🔧 Environment Variables

### Production Environment

```bash
# .env.production
NEXT_PUBLIC_API_URL=https://api.production.com
GLID_API_ENDPOINT=https://glid.optima-pos.com/api
NODE_ENV=production
```

### Set in Vercel
```bash
vercel env add NEXT_PUBLIC_API_URL
vercel env add GLID_API_ENDPOINT
```

---

## 📊 Performance Optimization

### Before Deployment

1. **Run Build Analysis**
```bash
npm run build
```

2. **Check Bundle Size**
```bash
npx @next/bundle-analyzer
```

3. **Lighthouse Audit**
```bash
npx lighthouse http://localhost:3000 --view
```

### Optimization Checklist
- ✅ Images optimized (WebP format)
- ✅ Fonts preloaded
- ✅ CSS minimized
- ✅ JavaScript code-split
- ✅ Static assets cached
- ✅ Gzip/Brotli compression enabled

---

## 🔒 Security Best Practices

### Headers Configuration

Add to `next.config.ts`:

```typescript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
```

---

## 📈 Monitoring & Analytics

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Error Tracking (Sentry)

```bash
npm install @sentry/nextjs
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 🌍 Custom Domain Setup

### Vercel

1. Go to Project Settings > Domains
2. Add your domain
3. Configure DNS:
   - Add CNAME record: `your-domain.com` → `cname.vercel-dns.com`

### Netlify

1. Go to Domain Settings
2. Add custom domain
3. Configure DNS:
   - Add A record: `@` → Netlify IP
   - Add CNAME: `www` → `your-site.netlify.app`

---

## 🔧 Troubleshooting

### Common Issues

**Issue**: 3D viewer not loading
**Solution**: Ensure Three.js is properly transpiled in `next.config.ts`

**Issue**: Build timeout
**Solution**: Increase build timeout in platform settings

**Issue**: Environment variables not working
**Solution**: Prefix with `NEXT_PUBLIC_` for client-side access

---

## 📞 Support

For deployment issues, contact:
- **Email**: support@optima-pos.com
- **GitHub Issues**: Create an issue in the repository

---

**Last Updated**: 2024
**Version**: 1.0.0
