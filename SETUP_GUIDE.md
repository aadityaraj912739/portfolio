# Portfolio Website - Setup Guide

## Quick Start Guide

Follow these steps to get your portfolio website up and running locally.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - Choose one:
  - Local MongoDB - [Download here](https://www.mongodb.com/try/download/community)
  - MongoDB Atlas (Cloud) - [Sign up here](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download here](https://git-scm.com/)

## 🚀 Step-by-Step Installation

### Step 1: Navigate to Project Directory

Open your terminal/command prompt and navigate to the portfolio folder:

```bash
cd c:\Users\ar912\OneDrive\Desktop\PROJECT_RESUME\portfolio
```

### Step 2: Install Root Dependencies

```bash
npm install
```

This installs concurrently for running both servers simultaneously.

### Step 3: Install Backend Dependencies

```bash
cd server
npm install
```

### Step 4: Configure Backend Environment Variables

1. In the `server` folder, you'll find a `.env` file
2. Update it with your credentials:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**For MongoDB Atlas:**
Replace `MONGODB_URI` with your Atlas connection string:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

**For Gmail App Password:**
1. Go to your Google Account
2. Security → 2-Step Verification (enable if not already)
3. App Passwords → Generate new password
4. Copy and paste it in `EMAIL_PASS`

### Step 5: Install Frontend Dependencies

Open a new terminal and run:

```bash
cd client
npm install
```

### Step 6: Start MongoDB (If using local MongoDB)

If using local MongoDB, start the MongoDB service:

**Windows:**
```bash
net start MongoDB
```

**Mac/Linux:**
```bash
sudo systemctl start mongod
```

### Step 7: Run the Application

You have two options:

#### Option A: Run Both (Frontend + Backend) Together

From the root `portfolio` directory:
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend on `http://localhost:3000`

#### Option B: Run Separately

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

### Step 8: Open in Browser

The application will automatically open at:
```
http://localhost:3000
```

## 🎉 You're All Set!

Your portfolio website should now be running. You should see:
- ✅ Beautiful responsive design
- ✅ All sections (Hero, About, Skills, Projects, Experience, Education, Contact)
- ✅ Working contact form
- ✅ Smooth animations

## 🔧 Troubleshooting

### MongoDB Connection Error
**Error:** `MongoDB Connection Error`

**Solution:**
- Verify MongoDB is running
- Check your connection string in `.env`
- For Atlas, ensure IP whitelist is configured (add `0.0.0.0/0` for all IPs)

### Port Already in Use
**Error:** `Port 3000 or 5000 already in use`

**Solution:**
- Close other applications using these ports
- Or change the port in `.env` (backend) or `package.json` (frontend)

### Dependencies Installation Failed
**Error:** `npm install` errors

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Email Not Sending
**Error:** Contact form not sending emails

**Solution:**
- Verify `EMAIL_USER` and `EMAIL_PASS` in `.env`
- Ensure Gmail App Password is correct
- Check if 2-Step Verification is enabled in Google Account

## 📝 Environment Variables Reference

### Backend (.env)
```env
PORT=5000                           # Server port
MONGODB_URI=your_mongodb_uri        # MongoDB connection string
EMAIL_USER=your-email@gmail.com     # Your Gmail address
EMAIL_PASS=your-app-password        # Gmail App Password
```

## 🌐 Building for Production

### Frontend Build
```bash
cd client
npm run build
```

This creates an optimized production build in the `client/build` folder.

### Deploy Backend
- Deploy to Heroku, Railway, Render, or any Node.js hosting
- Set environment variables in hosting platform

### Deploy Frontend
- Deploy to Vercel, Netlify, or any static hosting
- Upload the `build` folder

## 📱 Testing the Contact Form

1. Fill in the contact form on the website
2. Click "Send Message"
3. Check:
   - Success toast notification appears
   - Email received at your configured email address
   - Message saved in MongoDB database

## 🎨 Customization Tips

1. **Update Personal Info:** Edit component files in `client/src/components/`
2. **Change Colors:** Modify CSS files in `client/src/styles/`
3. **Add Projects:** Edit `Projects.jsx`
4. **Update Skills:** Edit `Skills.jsx`

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)

## 💡 Development Tips

- Use `npm run dev` in server folder for auto-reload during development
- React app has hot reload by default
- Check browser console for any errors
- Use MongoDB Compass to view database entries

## 🤔 Need Help?

If you encounter any issues:
1. Check the error messages in terminal
2. Verify all prerequisites are installed
3. Ensure environment variables are set correctly
4. Check MongoDB connection

## 📞 Contact

For questions or issues:
- Email: ar912739@gmail.com
- LinkedIn: [linkedin.com/in/aaditya-raj-897aa5327](https://linkedin.com/in/aaditya-raj-897aa5327)
- GitHub: [github.com/aadityaraj912739](https://github.com/aadityaraj912739)

---

Happy Coding! 🚀
