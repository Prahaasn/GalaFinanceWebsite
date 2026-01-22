# 🚀 Quick Upload Guide - 5 Minute Deployment

## What You Need
- Hostinger login credentials
- The `dist/` folder (already built and ready!)

---

## Upload Steps (Simple Version)

### 1. Log into Hostinger
- Go to https://www.hostinger.com/
- Click Login
- Enter your credentials

### 2. Open File Manager
- Find "File Manager" in your hPanel dashboard
- Click to open

### 3. Go to public_html
- Navigate to the `public_html` folder
- This is where your website lives

### 4. Upload Everything from dist/
- Click "Upload Files" button
- Select ALL files and folders inside your `dist/` folder:
  - index.html
  - .htaccess (IMPORTANT!)
  - assets folder
  - images folder
- Wait for upload to finish (30-60 seconds)

### 5. Check .htaccess Uploaded
- Look for `.htaccess` file in public_html
- Don't see it? Click Settings → "Show Hidden Files"
- Still missing? See full guide (HOSTINGER_DEPLOYMENT.md)

### 6. Enable SSL (Optional but Recommended)
- In hPanel, find "SSL" section
- Click "Install" or "Enable"
- Wait 5-10 minutes

### 7. Test Your Site!
- Visit your domain: https://yourdomain.com
- Click through all pages
- Test the contact form
- Test the chat widget

**Done! Your website is live! 🎉**

---

## Troubleshooting

**Problem: Pages show 404 error when refreshed**
- .htaccess file missing or not working
- Enable "Show Hidden Files" in File Manager
- Check .htaccess exists in public_html

**Problem: Site looks broken (no styling)**
- assets/ folder didn't upload correctly
- Re-upload the assets folder

**Problem: Forms not sending emails**
- Check spam folder first!
- Verify internet connection
- Test with different email

---

## Files You're Uploading

From the `dist/` folder:
```
✅ index.html           - Main website file
✅ .htaccess           - Server configuration (CRITICAL!)
✅ assets/             - CSS and JavaScript
✅ images/             - All your images
```

**Total size:** ~2-3 MB (quick to upload)

---

## Need More Help?

See the detailed guide: **HOSTINGER_DEPLOYMENT.md**

Or contact Hostinger support (24/7 live chat in hPanel)
