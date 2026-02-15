const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// POST - Submit Contact Form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save to database
    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    // Optional: Send email notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && 
        process.env.EMAIL_USER !== 'ar912739@gmail.com' &&
        !process.env.EMAIL_PASS.includes('your-')) {
      
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'ar912739@gmail.com',
          replyTo: email,
          subject: `Portfolio Contact from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully to', 'ar912739@gmail.com');
      } catch (emailError) {
        console.error('Email sending failed:', emailError.message);
        // Continue even if email fails - message is already saved in DB
      }
    } else {
      console.log('Email not configured. Message saved to database only.');
    }

    res.status(201).json({ 
      message: 'Message sent successfully!',
      success: true 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Failed to send message. Please try again.',
      success: false 
    });
  }
});

// GET - Retrieve all contacts (optional - for admin panel)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

module.exports = router;
