# TrentLisa Website Server Implementation Plan

## Project Overview
- **Domain**: www.trentlisa.com
- **Technology**: Next.js 15.3.2 React application
- **Purpose**: Wedding website with countdown, photo gallery, travel registry, and honeymoon tracker

## Next Steps for Server Deployment

### 1. Server Environment Setup
**Check existing server structure first!**
- Review the server's existing README, nvm setup, and Claude system files
- Ensure Node.js version compatibility (check nvm configuration)
- Verify if PM2 or similar process manager is already configured

### 2. Dependencies & Requirements
```bash
# Node.js version (check server's nvm setup)
node >= 18.0.0

# IMPORTANT: node_modules was excluded from transfer due to symlink issues
# Dependencies MUST be rebuilt on server
npm ci

# Build the application
npm run build
```

### 3. Server Configuration Needed
- **Port**: Application runs on port 3000 (configurable via environment)
- **Process Management**: Use existing server's process manager or configure PM2
- **Environment Variables**: Set up production environment variables
- **Static Files**: Ensure proper serving of /public assets and photos

### 4. SSL Certificate & HTTPS Setup
- **Domain**: www.trentlisa.com (DNS already configured)
- **SSL**: Implement Let's Encrypt certificate or use existing server SSL setup
- **Nginx/Apache**: Configure reverse proxy from port 80/443 to 3000
- **Auto-renewal**: Set up SSL certificate auto-renewal

### 5. Deployment Process
```bash
# Upload files to server (node_modules excluded from USB transfer)
# Navigate to project directory
cd /path/to/trentlisa

# CRITICAL: Install dependencies first (node_modules was not transferred)
npm ci

# Build production version
npm run build

# Start application (use server's preferred method)
npm run start
# OR with PM2:
pm2 start npm --name "trentlisa" -- start
```

### 6. Web Server Configuration (Nginx example)
```nginx
server {
    listen 80;
    server_name www.trentlisa.com trentlisa.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.trentlisa.com trentlisa.com;
    
    ssl_certificate /path/to/ssl/cert.pem;
    ssl_certificate_key /path/to/ssl/key.pem;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 7. Important Notes
- **Review server's existing setup**: Check README, nvm, and Claude files first
- **Backup**: Create backup before deployment
- **Testing**: Test in staging environment if available
- **Monitoring**: Set up monitoring for the application
- **Logs**: Configure proper logging and log rotation

### 8. Features Included
- Countdown timer to wedding date
- Photo gallery with multiple images
- Travel registry page
- Admin panel for honeymoon tracking
- Responsive design with Tailwind CSS
- Interactive map integration (Mapbox)

### 9. Security Considerations
- No sensitive data exposed in repository
- HTTPS enforced
- Proper file permissions on server
- Regular security updates

### 10. Maintenance
- Regular dependency updates
- SSL certificate renewal
- Log monitoring
- Performance monitoring

---
**Next Action**: Review server's existing configuration files, README, and nvm setup before proceeding with deployment.