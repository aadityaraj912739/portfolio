# Quick Reference Guide - Portfolio Website

## 🚀 Common Commands

### Starting the Application

```bash
# Start both frontend and backend
npm run dev
```

### Port Issues

If you get "Port already in use" error:

**Option 1: Use the kill-ports script**
```bash
npm run kill-ports
```

**Option 2: Manual PowerShell**
```powershell
.\kill-ports.ps1
```

**Option 3: Manual commands**
```powershell
# Find processes
netstat -ano | findstr ":5000 :3000"

# Kill process (replace PID)
taskkill /PID <PID> /F
```

### Installation Commands

```bash
# Install all dependencies (root, server, client)
npm run install-all

# Install only server dependencies
npm run install-server

# Install only client dependencies
npm run install-client
```

### Running Servers Separately

```bash
# Run only backend (port 5000)
npm run server

# Run only frontend (port 3000)
npm run client
```

### Building for Production

```bash
# Build optimized frontend
npm run build
```

## 🌐 URLs

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **Backend Health Check:** http://localhost:5000/

## 📂 Important Files

### Configuration Files
- `server/.env` - Backend environment variables
- `client/package.json` - Frontend dependencies
- `server/package.json` - Backend dependencies

### Email Setup
- `server/EMAIL_SETUP.md` - Email configuration guide
- Update `EMAIL_USER` and `EMAIL_PASS` in `server/.env`

### MongoDB
- Default connection: `mongodb://localhost:27017/portfolio`
- Update `MONGODB_URI` in `server/.env` for custom connection

## 🔧 Troubleshooting Checklist

### Before Running `npm run dev`:

✅ MongoDB is running (if using local MongoDB)
✅ Ports 3000 and 5000 are free
✅ Dependencies are installed (`npm run install-all`)
✅ Environment variables are set in `server/.env`

### If Frontend Not Loading:

1. Check if port 3000 is free
2. Clear browser cache (Ctrl + Shift + Delete)
3. Try http://localhost:3000 directly
4. Check browser console for errors (F12)

### If Backend Not Starting:

1. Check if port 5000 is free
2. Verify MongoDB is running
3. Check `server/.env` has correct MONGODB_URI
4. Look at terminal for specific error messages

## 📝 Quick Fixes

### "Port already in use"
```bash
npm run kill-ports
npm run dev
```

### "MongoDB connection error"
```bash
# Windows
net start MongoDB

# Then retry
npm run dev
```

### "Cannot find module"
```bash
npm run install-all
npm run dev
```

### Browser shows blank page
```bash
# Clear browser cache
# Press F12 → Console tab → Check for errors
# Verify http://localhost:3000 is accessible
```

## 🎨 Customization Locations

- **Personal Info:** `client/src/components/Hero.jsx`
- **About Section:** `client/src/components/About.jsx`
- **Projects:** `client/src/components/Projects.jsx`
- **Skills:** `client/src/components/Skills.jsx`
- **Experience:** `client/src/components/Experience.jsx`
- **Colors/Styles:** `client/src/styles/*.css`

## 📧 Email Configuration (Optional)

1. Generate Gmail App Password: https://myaccount.google.com/apppasswords
2. Update in `server/.env`:
   ```env
   EMAIL_USER=ar912739@gmail.com
   EMAIL_PASS=your-16-char-password
   ```
3. Restart server

**Note:** Email is optional. Contact form works without it and saves to MongoDB.

## 🗄️ MongoDB Operations

### View Database
- Use MongoDB Compass
- Connect to: `mongodb://localhost:27017`
- Database: `portfolio`
- Collection: `contacts`

### View Contact Form Submissions
```bash
# Using MongoDB shell
mongosh
use portfolio
db.contacts.find()
```

## 📱 Testing

### Test Backend API
```bash
# Health check
curl http://localhost:5000

# Or in browser
http://localhost:5000
```

### Test Frontend
```bash
# In browser
http://localhost:3000
```

### Test Contact Form
1. Go to http://localhost:3000
2. Scroll to Contact section
3. Fill form and submit
4. Check MongoDB for saved message
5. Check email (if configured)

## 🚨 Emergency Reset

If everything is broken:

```bash
# 1. Kill all ports
npm run kill-ports

# 2. Delete all node_modules
Remove-Item -Recurse -Force node_modules, server/node_modules, client/node_modules

# 3. Delete package locks
Remove-Item package-lock.json, server/package-lock.json, client/package-lock.json

# 4. Reinstall everything
npm install
npm run install-all

# 5. Start fresh
npm run dev
```

## 💡 Pro Tips

- **Always check ports first** if servers won't start
- **MongoDB must be running** before starting backend
- **Email is optional** - don't worry if it's not working
- **Use browser dev tools (F12)** to debug frontend issues
- **Check terminal output** for backend errors
- **Contact form saves to DB** even if email fails

## 📞 Need Help?

1. Check error messages in terminal
2. Review this guide
3. Check `SETUP_GUIDE.md` for detailed instructions
4. Check `server/EMAIL_SETUP.md` for email issues
5. Contact: ar912739@gmail.com

---

**Remember:** `npm run kill-ports` → `npm run dev` fixes 90% of issues! 🎯
