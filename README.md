# Aaditya Raj - Portfolio Website

A modern, responsive portfolio website built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to showcase my projects, skills, and experience as a Full Stack Developer.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Contact Form**: Functional contact form with backend API integration
- **Project Showcase**: Detailed project cards with live links and GitHub repositories
- **Skills Section**: Comprehensive display of technical skills with icons
- **Experience Timeline**: Professional work experience presentation
- **Education History**: Academic background and achievements

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5 & CSS3
- React Icons
- React Router DOM
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- Nodemailer
- CORS

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🏗️ Project Structure

```
portfolio/
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── styles/        # CSS files
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                 # Backend Node.js application
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── server.js          # Main server file
│   └── package.json
│
└── README.md
```

## 🌐 Deployment

### Frontend (Vercel)
1. Build the production version:
```bash
cd client
npm run build
```

2. Deploy to Vercel or any static hosting service

### Backend (Heroku/Railway/Render)
1. Ensure environment variables are set
2. Deploy using your preferred platform

## 📧 Contact Form Setup

To enable email functionality:

1. Create a Gmail App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification
   - App Passwords → Generate new password

2. Add credentials to `.env`:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

## 🔧 Troubleshooting

### Port Already in Use Error

**Error:** `EADDRINUSE: address already in use :::5000` or `:::3000`

**Quick Solution:**
```powershell
# Run the kill-ports script
.\kill-ports.ps1
```

**Manual Solution:**
```powershell
# Find processes on ports
netstat -ano | findstr ":5000 :3000"

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

**Then restart:**
```bash
npm run dev
```

### MongoDB Connection Issues

**Error:** `MongoDB Connection Error`

**Solutions:**
- Ensure MongoDB service is running (Windows: `net start MongoDB`)
- Check connection string in `server/.env`
- For MongoDB Atlas, verify IP whitelist and credentials

### Frontend Not Loading

**Issue:** Blank page or errors in browser console

**Solutions:**
- Clear browser cache (Ctrl + Shift + Delete)
- Check browser console for errors (F12)
- Verify both servers are running on ports 3000 and 5000
- Try accessing http://localhost:3000 directly

### Email Not Sending

**Issue:** Contact form submits but no email received

**Note:** This is optional functionality. Messages are still saved to MongoDB.

**Solutions:**
- Follow steps in `server/EMAIL_SETUP.md`
- Verify Gmail App Password is correctly set in `.env`
- Check server console for email errors
- Ensure 2-Step Verification is enabled on Gmail account

### Dependencies Installation Failed

**Error:** npm install errors

**Solutions:**
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 🎨 Customization

You can easily customize the portfolio by:

1. **Personal Information**: Update details in component files
2. **Colors**: Modify CSS variables in style files
3. **Projects**: Add/edit projects in `Projects.jsx`
4. **Skills**: Update skills in `Skills.jsx`

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Aaditya Raj**

- LinkedIn: [linkedin.com/in/aaditya-raj-897aa5327](https://linkedin.com/in/aaditya-raj-897aa5327)
- GitHub: [github.com/aadityaraj912739](https://github.com/aadityaraj912739)
- Email: ar912739@gmail.com

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Inspiration from various portfolio designs

## 📝 Notes

- Make sure MongoDB is running before starting the backend
- Update the proxy in client/package.json if using a different backend port
- Configure CORS settings in server.js for production deployment

---

Made with ❤️ using MERN Stack
