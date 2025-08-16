# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## 🚀 Quick Deployment Steps

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" button in the top right → "New repository"
3. Name your repository (e.g., `portfolio` or `ameyapotey.github.io`)
4. Make it **Public** (required for free GitHub Pages)
5. **Do NOT** initialize with README (we already have files)
6. Click "Create repository"

### 2. Upload Your Portfolio Files

**Option A: Using GitHub Web Interface (Easiest)**
1. On your new repository page, click "uploading an existing file"
2. Drag and drop all portfolio files:
   - `index.html`
   - `styles.css` 
   - `script.js`
   - `resume.pdf`
   - `README.md`
   - `.gitignore`
3. Write commit message: "Initial portfolio upload"
4. Click "Commit changes"

**Option B: Using Git Command Line**
```bash
# In your portfolio directory
git init
git add .
git commit -m "Initial portfolio upload"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

### 4. Access Your Live Portfolio

- Your portfolio will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
- If you named your repo `YOUR_USERNAME.github.io`, it will be: `https://YOUR_USERNAME.github.io`
- It may take 5-10 minutes to deploy initially

## 🔧 Repository Naming Options

### Option 1: User/Organization Site
- **Repository Name:** `ameyapotey.github.io`
- **URL:** `https://ameyapotey.github.io`
- **Benefits:** Cleaner URL, represents your main site

### Option 2: Project Site
- **Repository Name:** `portfolio` (or any name)
- **URL:** `https://ameyapotey.github.io/portfolio`
- **Benefits:** Can have multiple project sites

## 📁 File Structure for GitHub Pages

```
your-repo/
├── index.html          # Main page (required)
├── styles.css          # CSS styles
├── script.js           # JavaScript
├── resume.pdf          # Your resume
├── README.md           # Repository documentation
├── .gitignore         # Git ignore rules
└── DEPLOYMENT.md      # This deployment guide
```

## ✅ Pre-Deployment Checklist

- [x] All file paths are relative (no absolute paths)
- [x] Resume PDF is in root directory
- [x] All external links open in new tabs
- [x] GitHub repository links point to correct repos
- [x] Contact information is accurate
- [x] README.md is informative and professional
- [x] .gitignore prevents unwanted files from being committed

## 🔄 Updating Your Portfolio

After making changes locally:

**Using GitHub Web Interface:**
1. Go to your repository
2. Click on the file you want to update
3. Click the pencil icon (Edit)
4. Make your changes
5. Commit changes

**Using Git:**
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Changes will automatically deploy to your live site within a few minutes.

## 🌐 Custom Domain (Optional)

To use a custom domain like `ameyapotey.com`:

1. Buy a domain from a registrar
2. In your repository, go to Settings → Pages
3. Under "Custom domain", enter your domain
4. Configure DNS records with your domain provider:
   - Add CNAME record pointing to `YOUR_USERNAME.github.io`
5. Enable "Enforce HTTPS" in GitHub Pages settings

## 🐛 Troubleshooting

**Portfolio not loading?**
- Check that `index.html` is in the root directory
- Verify repository is public
- Wait 10-15 minutes for initial deployment

**Broken links or missing files?**
- Ensure all file paths are relative (no `/` at the beginning)
- Check file names match exactly (case-sensitive)

**Resume not downloading?**
- Verify `resume.pdf` is in the root directory
- Check file size is under 100MB (GitHub limit)

**Changes not appearing?**
- Wait 5-10 minutes for GitHub Pages to rebuild
- Try hard refresh (Ctrl+F5 or Cmd+Shift+R)
- Check Actions tab for deployment status

## 📞 Need Help?

If you encounter issues:
1. Check [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Verify repository settings
3. Check Actions tab for build errors
4. Contact GitHub Support if needed

## 🎉 Next Steps

After deployment:
1. Test all links and functionality
2. Share your portfolio URL on LinkedIn and resume
3. Add the URL to your email signature
4. Keep it updated with new projects and experiences

---

**Your portfolio is now live and ready to impress potential employers! 🚀**