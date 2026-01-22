# 🚀 Hostinger Deployment Guide - Gala Finance Website

## ✅ What's Ready to Deploy

Your website has been **built and optimized** for production. Everything you need is in the `dist/` folder:

```
dist/
├── index.html          (Main HTML file)
├── .htaccess          (Apache server configuration - CRITICAL!)
├── assets/            (Optimized CSS & JavaScript)
│   ├── index-B4TNAHCc.js   (403KB - all your React code)
│   └── index-CUnVH0Bf.css  (37KB - all styles)
├── images/            (All your image files)
│   ├── Gaurang Gala Founder & CEO.png
│   └── (other images)
└── _redirects         (Not needed for Hostinger, but won't hurt)
```

**Total Size:** ~2-3 MB (quick to upload!)

---

## 📋 Step-by-Step Deployment Process

### STEP 1: Access Hostinger File Manager

1. **Log into Hostinger**
   - Go to: https://www.hostinger.com/
   - Click "Login" (top right)
   - Enter your email and password

2. **Open hPanel (Hostinger Control Panel)**
   - After login, you'll see your hPanel dashboard
   - Find the domain you want to use (e.g., galafinancegroup.com)

3. **Open File Manager**
   - Look for "Files" section in hPanel
   - Click **"File Manager"** button
   - A new tab will open with your file browser

---

### STEP 2: Navigate to Your Website Root Folder

1. **Find the correct folder**
   - Look for `public_html` folder (this is where your website lives)
   - Double-click to open it

2. **Check if folder is empty**
   - If this is a new website: folder should be empty or have placeholder files
   - If replacing existing site: **BACKUP FIRST** (see below)

3. **BACKUP EXISTING FILES (if any)**
   - Select all files in `public_html`
   - Click "Compress" or "Download"
   - Save backup to your computer
   - Then delete old files to start fresh

---

### STEP 3: Upload Your Website Files

**IMPORTANT:** You need to upload the **CONTENTS** of the `dist/` folder, NOT the `dist/` folder itself!

#### Method A: Using File Manager Upload (Recommended)

1. **Prepare files on your computer**
   - Open the `dist/` folder on your computer
   - You should see: `index.html`, `.htaccess`, `assets/`, `images/`, etc.

2. **Upload files**
   - In Hostinger File Manager, make sure you're inside `public_html`
   - Click the **"Upload Files"** button (top toolbar)
   - Select ALL files and folders from inside your `dist/` folder:
     - ✅ index.html
     - ✅ .htaccess (CRITICAL - make sure this uploads!)
     - ✅ assets folder (entire folder)
     - ✅ images folder (entire folder)
     - ✅ _redirects (optional but harmless)

3. **Wait for upload to complete**
   - Small progress bar will show upload status
   - Usually takes 30-60 seconds depending on connection

4. **Verify .htaccess uploaded**
   - After upload, look for `.htaccess` file in `public_html`
   - **Don't see it?** Click "Settings" (gear icon) and enable "Show Hidden Files"
   - If still missing, create it manually (see Step 4)

#### Method B: Using FTP (Alternative)

If you prefer FTP software (like FileZilla):

1. **Get FTP credentials from Hostinger**
   - In hPanel, go to "Files" → "FTP Accounts"
   - Note: Hostname, Username, Password, Port (usually 21)

2. **Connect with FTP client**
   - Enter credentials in FileZilla or similar
   - Navigate to `public_html` folder

3. **Drag and drop all files**
   - From local `dist/` folder
   - To remote `public_html` folder

---

### STEP 4: Verify .htaccess File (CRITICAL!)

The `.htaccess` file makes your React Router work correctly. **This is the most important file!**

**Check if it exists:**
1. In File Manager, look for `.htaccess` in `public_html`
2. If you don't see it:
   - Click "Settings" (gear icon) → Enable "Show Hidden Files"
   - Refresh the page

**If .htaccess is missing, create it:**
1. Click "New File" button
2. Name it exactly: `.htaccess` (with the dot!)
3. Right-click the file → "Edit"
4. Paste this content:

```apache
# Apache Configuration for Gala Finance Group Website
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule ^ index.html [L]
</IfModule>


<IfModule mod_rewrite.c>
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

5. Click "Save" and "Close"

---

### STEP 5: Configure SSL/HTTPS (Highly Recommended)

1. **In hPanel, find "Security" section**
2. **Click "SSL" or "SSL/TLS"**
3. **Enable SSL for your domain**
   - Hostinger usually offers free SSL certificates
   - Click "Install" or "Enable"
   - Wait 5-10 minutes for SSL to activate

4. **Force HTTPS**
   - The `.htaccess` file already includes HTTPS redirect rules
   - All visitors will automatically use secure connection

---

### STEP 6: Test Your Website!

**Basic Tests:**

1. **Visit your domain**
   - Go to: `https://yourdomain.com` (replace with your actual domain)
   - You should see the Gala Finance homepage!

2. **Test all pages** (click links in navigation):
   - ✅ Home: `https://yourdomain.com/`
   - ✅ About: `https://yourdomain.com/about`
   - ✅ Services: `https://yourdomain.com/services`
   - ✅ Sectors: `https://yourdomain.com/sectors`
   - ✅ Contact: `https://yourdomain.com/contact`

3. **Test page refresh** (IMPORTANT!)
   - Go to any page (e.g., /about)
   - Press F5 or Ctrl+R to refresh
   - Page should still work (not 404 error)
   - **If you get 404:** .htaccess is not working (see troubleshooting)

4. **Test contact form**
   - Go to Contact page
   - Fill out and submit the form
   - Check if email arrives at gaurang@galafinancegroup.com

5. **Test chat widget**
   - Look for blue chat bubble in bottom-right corner
   - Click to open
   - Send a test message
   - Check email

**Performance Tests:**

1. **Check page load speed**
   - Pages should load quickly (1-3 seconds)
   - If slow, check "Optimize" section below

2. **Check mobile responsiveness**
   - Open site on phone or tablet
   - All pages should look good and work properly

3. **Check browser console** (press F12)
   - No red errors should appear
   - If you see errors, note them for troubleshooting

---

## 🔧 Troubleshooting Common Issues

### Issue 1: "404 Not Found" When Refreshing Pages

**Symptom:** Homepage works, but refreshing /about or /services shows 404 error

**Solution:**
- .htaccess file is missing or not working
- Check file exists in `public_html` folder
- Verify content matches example in Step 4
- Make sure file is named exactly `.htaccess` (with dot, no extension)
- Contact Hostinger support to verify Apache mod_rewrite is enabled

---

### Issue 2: Website Shows Old/Wrong Content

**Symptom:** Changes not appearing, or old website still showing

**Solutions:**
1. **Clear browser cache**
   - Press Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or try incognito/private browsing mode

2. **Check correct files uploaded**
   - Verify `index.html` has recent modification date
   - Check assets folder has new files

3. **Clear Cloudflare cache** (if using)
   - Log into Cloudflare
   - Go to Caching → Purge Everything

---

### Issue 3: Styles Not Loading / Site Looks Broken

**Symptom:** Website loads but has no styling, looks like plain HTML

**Solutions:**
1. **Check assets folder uploaded**
   - Verify `assets/` folder exists in `public_html`
   - Confirm it contains CSS and JS files

2. **Check file permissions**
   - Files should be 644
   - Folders should be 755
   - In File Manager: right-click → Permissions

3. **Check browser console** (F12)
   - Look for failed file requests
   - Should see assets loading from `/assets/`

---

### Issue 4: Contact Form Not Sending Emails

**Symptom:** Form submits but no email received

**Solutions:**
1. **Check spam folder** first!
2. **Verify Web3Forms is working**
   - Check internet connection
   - Test with different email address
3. **Check browser console for errors**
   - Open DevTools (F12) → Console tab
   - Submit form and look for red errors

---

### Issue 5: Images Not Showing

**Symptom:** Placeholder icons or broken images

**Solutions:**
1. **Verify images folder uploaded**
   - Check `images/` folder exists in `public_html`
   - Contains all PNG files

2. **Check image paths**
   - Images should be at `/images/filename.png`
   - File names are case-sensitive

3. **Check file permissions**
   - Images should be 644 permissions

---

## ⚡ Performance Optimization (Optional)

Once your site is live, you can improve speed:

### 1. Enable Gzip Compression (Already in .htaccess)
The `.htaccess` file includes compression rules - should work automatically

### 2. Use Hostinger's Caching
- In hPanel, look for "Speed" or "Cache"
- Enable "LiteSpeed Cache" or "WordPress Cache" if available

### 3. Enable Cloudflare (Free CDN)
- Go to Hostinger → Websites → Your Domain
- Look for "Cloudflare" integration
- Follow wizard to enable (5 minutes)
- Benefits: Faster load times, DDoS protection, free SSL

### 4. Optimize Images (For Future Updates)
- Compress images before upload using TinyPNG.com
- Use WebP format for better compression
- Resize large images to actual display size

---

## 🔄 How to Update Your Website Later

When you make changes and need to redeploy:

1. **Make your changes** in the code (locally)

2. **Rebuild the website:**
   ```bash
   npm run build
   ```

3. **Upload only changed files:**
   - In Hostinger File Manager, navigate to `public_html`
   - Upload new files from `dist/` folder
   - Overwrite when prompted

4. **Clear cache:**
   - Clear your browser cache (Ctrl+Shift+R)
   - If using Cloudflare, purge cache there too

5. **Test the changes:**
   - Visit your site and verify updates appear

**Pro Tip:** Keep a backup of your `dist/` folder before each deployment!

---

## 📞 Need Help?

### Hostinger Support
- **Live Chat:** Available 24/7 in hPanel
- **Email:** support@hostinger.com
- **Help Center:** https://support.hostinger.com

### Website Issues
- Check browser console (F12) for error messages
- Verify all files uploaded correctly
- Ensure .htaccess file is present and correct

---

## ✅ Deployment Checklist

Use this checklist for your deployment:

- [ ] Built website (`npm run build` completed successfully)
- [ ] Logged into Hostinger hPanel
- [ ] Opened File Manager
- [ ] Navigated to `public_html` folder
- [ ] Backed up old files (if any)
- [ ] Uploaded ALL contents of `dist/` folder
- [ ] Verified `.htaccess` file exists (enable "Show Hidden Files")
- [ ] Enabled SSL/HTTPS for domain
- [ ] Tested homepage loads
- [ ] Tested all 5 pages (/, /about, /services, /sectors, /contact)
- [ ] Tested page refresh on each route (no 404 errors)
- [ ] Tested contact form submission
- [ ] Tested chat widget
- [ ] Checked email arrives at gaurang@galafinancegroup.com
- [ ] Tested on mobile device
- [ ] Cleared browser cache and tested again

**All checked? Congratulations! Your website is live! 🎉**

---

## 📊 Current Build Information

**Build Date:** Generated on build
**Build Size:** ~2-3 MB total
**Optimizations:**
- JavaScript minified and bundled (403KB → 114KB gzipped)
- CSS optimized (37KB → 6.17KB gzipped)
- Images included
- .htaccess configured for caching and compression

**Environment:**
- React 18.3.1
- Vite 5.4.2
- TypeScript 5.5.3
- Tailwind CSS 3.4.1
- Supabase backend (already configured)
- Web3Forms email (already configured)

**API Keys Included:**
- ✅ Supabase (public anon key - safe to expose)
- ✅ Web3Forms (configured for gaurang@galafinancegroup.com)