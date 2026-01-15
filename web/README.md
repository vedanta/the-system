# The System - Web Distribution

This directory contains the web distribution for The System framework, including the landing page and install script hosting.

## 🌐 Live Site

- **Website**: [https://the-system.dev](https://the-system.dev)
- **Install Script**: [https://install.the-system.dev/install.sh](https://install.the-system.dev/install.sh)

## 📁 Structure

```
web/
├── index.html           # Landing page
├── install.sh           # Install script (copied from root)
├── vercel.json          # Vercel deployment config
├── netlify.toml         # Netlify deployment config
├── README.md           # This file
└── api/                # Serverless functions (future)
```

## 🚀 Deployment Options

### Vercel (Recommended)

1. **Deploy to Vercel:**
   ```bash
   cd web/
   vercel --prod
   ```

2. **Custom Domain:**
   ```bash
   vercel domains add install.the-system.dev
   vercel domains add the-system.dev
   ```

3. **Auto-deployment:**
   - Connect GitHub repository
   - Set build directory to `web/`
   - Automatic deployments on push

### Netlify

1. **Deploy to Netlify:**
   ```bash
   cd web/
   netlify deploy --prod --dir=.
   ```

2. **Custom Domain:**
   - Go to Netlify dashboard
   - Add custom domain: `install.the-system.dev`
   - Configure DNS settings

### Cloudflare Pages

1. **Deploy to Cloudflare Pages:**
   - Connect GitHub repository
   - Set build directory to `web/`
   - Configure custom domain

## 🔧 Local Development

### Simple HTTP Server
```bash
cd web/
python3 -m http.server 8000
# Visit: http://localhost:8000
```

### Live Server (VS Code)
1. Install Live Server extension
2. Right-click on `index.html` → "Open with Live Server"

## 📋 Domain Setup

### DNS Configuration

For domain `install.the-system.dev`:

```
Type    Name                    Value
CNAME   install.the-system.dev  your-vercel-deployment.vercel.app
```

For domain `the-system.dev`:

```
Type    Name                Value
A       the-system.dev      76.76.19.61  (Vercel IP)
CNAME   www                 the-system.dev
```

### SSL Certificate
- Vercel: Automatic SSL certificates
- Netlify: Automatic SSL certificates
- Cloudflare: Automatic SSL certificates

## 🔄 Update Process

### Manual Update
```bash
# Update install script
cp ../install.sh ./install.sh

# Deploy
vercel --prod
```

### Automated Update (GitHub Actions)
```yaml
# .github/workflows/deploy-web.yml
name: Deploy Web
on:
  push:
    branches: [main]
    paths: ['install.sh', 'web/**']

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Update install script
        run: cp install.sh web/install.sh
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          working-directory: ./web
```

## 📊 Analytics & Monitoring

### Install Script Usage
```bash
# Basic analytics with Vercel
curl -H "Authorization: Bearer $VERCEL_TOKEN" \
  "https://api.vercel.com/v2/domains/install.the-system.dev/analytics"
```

### Error Monitoring
- Vercel Functions for error logging
- CloudFlare Analytics for traffic
- Custom logging for install script downloads

## 🔐 Security

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com;
  style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com;
  img-src 'self' data: https:;
  connect-src 'self' https://api.github.com;
">
```

### Install Script Security
- Served with correct MIME type
- HTTPS only
- CORS headers configured
- Content integrity checking

## 🧪 Testing

### Install Script Testing
```bash
# Test local install script
curl -fsSL http://localhost:8000/install.sh | bash -s -- --help

# Test production install script
curl -fsSL https://install.the-system.dev/install.sh | bash -s -- --help
```

### Website Testing
- Lighthouse audit
- Cross-browser testing
- Mobile responsiveness
- Load time optimization

## 📝 Content Updates

### Landing Page Updates
1. Edit `index.html`
2. Test locally
3. Commit and push (auto-deploy)

### Install Script Updates
1. Update `../install.sh`
2. Copy to `web/install.sh`
3. Deploy

## 🔗 Integration Points

### GitHub Repository
- Install script stays in sync with main repo
- Documentation links to GitHub
- Issue tracking integration

### Claude Code Integration
- Direct download links
- Installation verification
- Usage analytics

### Framework Integration
- Version synchronization
- Feature flag updates
- Release announcements

---

## 🚀 Quick Deploy Commands

```bash
# One-time setup
cd web/
npm install -g vercel
vercel login

# Deploy
vercel --prod
vercel domains add install.the-system.dev

# Verify
curl -fsSL https://install.the-system.dev/install.sh | bash -s -- --help
```

**Ready for global distribution! 🌍**