# Spruce Mobile Detailing - Deployment Guide

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Git installed on your local machine

## Step 1: Push to GitHub

### If you haven't initialized Git yet:

```bash
cd /app
git init
git add .
git commit -m "Initial commit: Spruce Mobile Detailing website"
```

### Connect to your GitHub repository:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/spruce-mobile-detailing.git

# Create and push to staging branch
git checkout -b staging
git push -u origin staging
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended for first-time users)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New" → "Project"
3. Import your `spruce-mobile-detailing` repository from GitHub
4. Configure project settings:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `yarn build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `yarn install` (auto-detected)
5. Click "Deploy"

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project directory
cd /app

# Login to Vercel
vercel login

# Deploy to preview (staging)
vercel

# Deploy to production
vercel --prod
```

## Step 3: Configure Staging Branch in Vercel

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Git
3. Under "Production Branch", keep it as `main` or `master`
4. Vercel automatically creates preview deployments for all other branches (including `staging`)
5. Every push to `staging` branch will create a new preview deployment

## Step 4: Get Your Preview URL

After deployment, Vercel will provide you with:

- **Preview URL**: `https://spruce-mobile-detailing-[hash].vercel.app`
- **Production URL** (when you deploy to main branch): `https://spruce-mobile-detailing.vercel.app`

You can find these URLs:
- In the Vercel deployment success message
- In your Vercel Dashboard under the project
- In your GitHub PR comments (Vercel bot automatically comments)

## Git Commands Summary

### Push changes to staging:

```bash
cd /app
git add .
git commit -m "Your commit message"
git push origin staging
```

### Create a Pull Request:

```bash
# After pushing to staging, go to GitHub and create a PR from staging to main
# Or use GitHub CLI:
gh pr create --base main --head staging --title "Deploy to production" --body "Ready for production deployment"
```

## Environment Configuration

No environment variables are required for basic deployment. If you need to add any in the future:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables for:
   - Development
   - Preview
   - Production

## Custom Domain (Optional)

To add your own domain:

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `sprucemobiledetailing.com`)
3. Follow Vercel's instructions to update your DNS settings
4. Vercel automatically provisions SSL certificates

## Troubleshooting

### Build Failures

If your build fails:

1. Check build logs in Vercel Dashboard
2. Ensure all dependencies are in `package.json`
3. Test locally with `yarn build` before pushing

### Preview Not Updating

1. Check that you pushed to the correct branch
2. Verify the commit appears in GitHub
3. Check Vercel Dashboard for deployment status

### Node Version Issues

If you encounter Node version issues:

1. Add `engines` field to `package.json`:
```json
"engines": {
  "node": "20.x"
}
```

## Monitoring

- **Analytics**: Enable Vercel Analytics in Project Settings
- **Performance**: Check Core Web Vitals in Vercel Dashboard
- **Logs**: View real-time logs in Vercel Dashboard → Project → Logs

## Next Steps

1. ✅ Push code to GitHub `staging` branch
2. ✅ Deploy to Vercel
3. ✅ Get preview URL
4. 🔄 Test the preview deployment thoroughly
5. 🔄 Create PR from `staging` to `main`
6. 🔄 Merge PR to deploy to production

## Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Next.js Documentation: https://nextjs.org/docs
