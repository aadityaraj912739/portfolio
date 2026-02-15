# Email Configuration Guide

Follow these steps to configure email notifications for your contact form.

## Step 1: Enable 2-Step Verification (if not already enabled)

1. Go to your Google Account: https://myaccount.google.com/security
2. Under "Signing in to Google", click on "2-Step Verification"
3. Follow the prompts to enable it

## Step 2: Generate App Password

1. Go to: https://myaccount.google.com/apppasswords
2. In the "Select app" dropdown, choose "Mail"
3. In the "Select device" dropdown, choose "Other (Custom name)"
4. Type: "Portfolio Website"
5. Click "Generate"
6. Google will show you a 16-character password (like: `abcd efgh ijkl mnop`)

## Step 3: Update .env File

Open `server/.env` file and update:

```env
EMAIL_USER=ar912739@gmail.com
EMAIL_PASS=your-16-character-app-password-here
```

**Example:**
```env
EMAIL_USER=ar912739@gmail.com
EMAIL_PASS=abcdefghijklmnop
```

**Important:** 
- Remove spaces from the app password when copying
- Don't use your regular Gmail password
- Keep this file secure and never commit it to Git

## Step 4: Test the Configuration

1. Restart your server
2. Go to your portfolio website
3. Fill out the contact form
4. Submit the form
5. Check your email (ar912739@gmail.com) for the message

## Troubleshooting

### "Invalid login" error:
- Verify 2-Step Verification is enabled
- Generate a new App Password
- Make sure you're using the App Password, not your regular password

### "Email not sent" but form works:
- Check `.env` file has correct credentials
- Ensure no extra spaces in the password
- Restart the server after updating `.env`

### Still not working:
- Check server console for error messages
- Verify Gmail account isn't locked or suspended
- Try accessing Gmail from browser to ensure account is active

## Alternative: Skip Email Configuration

If you don't want email notifications, the contact form will still work and save messages to MongoDB. You can view them by:
- Accessing the database directly
- Creating an admin panel
- Using MongoDB Compass

The form will always save to the database even if email fails.
