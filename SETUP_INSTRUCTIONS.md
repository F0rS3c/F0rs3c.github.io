# Setup Instructions for Web3Forms API Key

This guide will help you securely configure your Web3Forms API key for GitHub Pages deployment.

## 🔐 Method 1: Using GitHub Secrets (Recommended for GitHub Pages)

This method automatically injects your API key during deployment using GitHub Actions. The key never appears in your repository.

### Steps:

1. **Add your API key to GitHub Secrets:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `WEB3FORMS_API_KEY`
   - Value: Your Web3Forms API key (e.g., `f62c67aa-cbe7-4bbd-a81c-d47ef95f67b4`)
   - Click **Add secret**

2. **Enable GitHub Pages with GitHub Actions:**
   - Go to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
   - The workflow will automatically run when you push to the main branch

3. **Push your changes:**
   ```bash
   git add .
   git commit -m "Secure API key configuration"
   git push origin main
   ```

4. **Verify deployment:**
   - Go to **Actions** tab in your repository
   - Wait for the workflow to complete
   - Your site will be deployed with the API key securely injected

## 🛠️ Method 2: Local Development Setup

For local development and testing:

1. **Create `config.js` file:**
   ```bash
   cp config.example.js config.js
   ```

2. **Edit `config.js` and add your API key:**
   ```javascript
   window.CONFIG = {
       WEB3FORMS_API_KEY: 'your-actual-api-key-here'
   };
   ```

3. **The `config.js` file is already in `.gitignore`**, so it won't be committed to GitHub.

## ✅ Verification

- The contact form should work on your deployed GitHub Pages site
- The API key will not appear in your repository code
- Local development will use your local `config.js` file

## 🔍 Troubleshooting

- **Form not working?** Check the browser console for errors
- **API key not found?** Make sure you've added it to GitHub Secrets (Method 1) or created `config.js` locally (Method 2)
- **Workflow failing?** Check the Actions tab for error messages

## 📝 Important Notes

- Never commit `config.js` to your repository (it's in `.gitignore`)
- The `config.example.js` file is safe to commit - it's just a template
- Your API key is stored securely in GitHub Secrets and only injected during deployment

