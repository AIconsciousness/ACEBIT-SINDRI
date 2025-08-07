# 🚀 Netlify Deployment Guide - ACE BIT Sindri

## 📋 Prerequisites
- GitHub repository connected
- Netlify account
- Node.js 20.11.0

## ⚙️ Build Settings

### Build Command:
```bash
chmod +x netlify-build.sh && ./netlify-build.sh
```

### Publish Directory:
```
build
```

### Node.js Version:
```
20.11.0
```

## 🔧 Environment Variables

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_VERSION` | `20.11.0` | Node.js version |
| `NPM_VERSION` | `10.2.4` | npm version |
| `CI` | `false` | Disable CI checks |
| `SKIP_PREFLIGHT_CHECK` | `true` | Skip preflight checks |

## 📁 Required Files

### 1. `netlify.toml`
- Build configuration
- Redirects for SPA routing
- Security headers
- Cache settings

### 2. `public/_redirects`
- SPA routing support
- All routes redirect to index.html

### 3. `.nvmrc`
- Node.js version specification

### 4. `.npmrc`
- Legacy peer deps enabled
- Strict peer deps disabled

### 5. `netlify-build.sh`
- Custom build script
- Dependency installation
- TypeScript setup

## 🚀 Deployment Steps

### Option 1: Netlify CLI
```bash
# Install CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=build
```

### Option 2: Netlify Dashboard
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub repository
4. Set build settings
5. Deploy

## 🔍 Troubleshooting

### Common Issues:
1. **Peer Dependency Conflicts** ✅ Fixed with `.npmrc`
2. **TypeScript Module Not Found** ✅ Fixed with build script
3. **React Router Not Working** ✅ Fixed with `_redirects`
4. **Node.js Version Issues** ✅ Fixed with `.nvmrc`

### Build Logs:
- Check Netlify build logs for errors
- Verify all environment variables are set
- Ensure all required files are present

## 📞 Support
For deployment issues, check:
- Netlify build logs
- GitHub repository status
- Environment variable configuration
