# Git Setup and Deployment Guide for Spruce Mobile Detailing

## Quick Start Commands

### Initialize Git Repository (if not already done)

```bash
cd /app
git init
git add .
git commit -m "Initial commit: Spruce Mobile Detailing website"
```

### Connect to GitHub Repository

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/spruce-mobile-detailing.git

# Verify remote was added
git remote -v
```

### Create and Push to Staging Branch

```bash
# Create staging branch
git checkout -b staging

# Push to GitHub
git push -u origin staging
```

## Complete Step-by-Step Guide

### 1. First-Time Git Setup

If you haven't configured Git yet:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 2. Initialize and Commit

```bash
cd /app

# Initialize git (if not done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Complete Spruce Mobile Detailing website

- Homepage with hero section, services, FAQ
- About page
- Car Detailing service page
- RV Detailing service page with Before & After
- Boat Detailing service page
- Responsive navigation and footer
- Before & After gallery component
- Brand colors (deep evergreen #0F4C3A)
- Mobile-first responsive design
- SEO optimized meta tags"
```

### 3. Connect to GitHub

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/spruce-mobile-detailing.git
```

### 4. Push to Staging Branch

```bash
# Create and switch to staging branch
git checkout -b staging

# Push to GitHub
git push -u origin staging
```

### 5. Future Updates

After making changes:

```bash
# Check what changed
git status

# Add changed files
git add .

# Commit with a descriptive message
git commit -m "Your commit message here"

# Push to staging
git push origin staging
```

## Vercel Deployment

### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import `spruce-mobile-detailing` repository
4. Vercel will auto-detect Next.js settings:
   - Framework: Next.js
   - Build Command: `yarn build`
   - Output Directory: `.next`
   - Install Command: `yarn install`
5. Click "Deploy"

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview (staging)
cd /app
vercel

# Deploy to production
vercel --prod
```

### Branch Configuration in Vercel

- **Production Branch**: `main` (or `master`)
- **Preview Branch**: `staging` (automatically created)
- Every push to `staging` creates a preview deployment
- Merge to `main` for production deployment

## Creating a Pull Request

### Via GitHub Web Interface:

1. Go to your repository on GitHub
2. Click "Pull requests" → "New pull request"
3. Select:
   - Base branch: `main`
   - Compare branch: `staging`
4. Click "Create pull request"
5. Review changes
6. Merge when ready

### Via GitHub CLI:

```bash
# Install GitHub CLI if needed
# See: https://cli.github.com/

# Create PR
gh pr create --base main --head staging --title "Deploy to production" --body "Ready for production deployment"
```

## Verifying Your Deployment

After pushing to staging, Vercel will:
1. Automatically detect the push
2. Start building your site
3. Provide a preview URL (usually within 1-2 minutes)

You can find your preview URL:
- In the Vercel dashboard
- As a comment on your GitHub commit
- Via email notification (if enabled)

The preview URL format: `https://spruce-mobile-detailing-[hash]-[username].vercel.app`

## Common Git Commands Reference

```bash
# Check current branch
git branch

# Create new branch
git checkout -b branch-name

# Switch to existing branch
git checkout branch-name

# View commit history
git log --oneline

# View changes before committing
git diff

# Undo last commit (keep changes)
git reset HEAD~1

# View remote repositories
git remote -v

# Pull latest changes
git pull origin staging

# Push to specific branch
git push origin branch-name
```

## Troubleshooting

### Issue: Can't push to GitHub

**Solution:** Make sure you've set up SSH keys or use HTTPS with Personal Access Token

For HTTPS with token:
```bash
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/spruce-mobile-detailing.git
```

### Issue: Merge conflicts

**Solution:**
```bash
# Pull latest changes
git pull origin staging

# Resolve conflicts in your editor
# After resolving, add and commit
git add .
git commit -m "Resolved merge conflicts"
git push origin staging
```

### Issue: Vercel build fails

**Solution:** Check build logs in Vercel dashboard and ensure:
- All dependencies are in package.json
- Node version is compatible (v20.x recommended)
- No environment variables are missing

## Getting Your Preview URL

After deploying to Vercel, you'll receive a preview URL. Here's how to access it:

1. **From Vercel Dashboard:**
   - Go to your project in Vercel
   - Click on the latest deployment
   - Copy the deployment URL

2. **From GitHub:**
   - Look for the Vercel bot comment on your latest commit
   - Click the preview link

3. **From Vercel CLI:**
   ```bash
   vercel inspect
   ```

## Production Checklist

Before merging staging to main:

- [ ] Test all pages load correctly
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Test contact forms/phone links
- [ ] Verify social media links
- [ ] Check Google Maps embed
- [ ] Review SEO meta tags
- [ ] Test in different browsers
- [ ] Verify Before & After gallery works
- [ ] Check loading speed

## Need Help?

- **Git Issues:** [git-scm.com/doc](https://git-scm.com/doc)
- **GitHub Issues:** [docs.github.com](https://docs.github.com)
- **Vercel Issues:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Issues:** [nextjs.org/docs](https://nextjs.org/docs)

## Summary of What You Have

✅ Complete Next.js website with 5 pages
✅ Responsive design with Tailwind CSS
✅ SEO optimized with proper meta tags
✅ Before & After gallery
✅ Contact integration
✅ Social media links
✅ Mobile-first design
✅ Brand colors (#0F4C3A - Deep evergreen)
✅ Google Maps integration
✅ Ready for Vercel deployment

## Next Steps

1. ✅ Push code to GitHub staging branch (follow commands above)
2. ✅ Import repository to Vercel
3. ✅ Deploy and get preview URL
4. ⏳ Test preview deployment
5. ⏳ Create PR from staging to main
6. ⏳ Merge to main for production deployment

Good luck with your deployment! 🚀
