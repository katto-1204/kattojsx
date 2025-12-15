# Vivid Canvas Deployment Guide

## Environment Variables

Set these in your Vercel project settings:

```
NODE_ENV=production
DATABASE_URL=your_postgres_connection_string
```

### Optional Variables:
- `PORT` - Defaults to 3000 on Vercel
- Any other API keys or secrets your app needs

## Deployment Steps

1. **Push to Git**
   ```bash
   git add .
   git commit -m "Setup Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit https://vercel.com
   - Import your Git repository
   - Add environment variables in Project Settings → Environment Variables
   - Deploy

3. **Verify Deployment**
   - Check build logs: https://vercel.com/docs/concepts/deployments/logs
   - Test your API endpoints
   - Monitor in Vercel Dashboard

## Build Output Structure

```
dist/
├── index.cjs       (bundled server - auto-detected by Vercel)
└── public/         (built React app)
```

## Debugging

- View real-time logs: `vercel logs` (CLI)
- Check build logs in Vercel dashboard
- Environment variables section to verify setup
- Edge Function logs for API routes

## Notes

- Build bundles most dependencies to optimize cold starts
- Static files served from `/dist/public`
- API routes handled by Express server
