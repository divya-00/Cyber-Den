const express = require('express')
const mongoose = require('mongoose')
const app = express();
const cors = require('cors');
const User = require('./Models/user');
const Contactform = require('./Models/contactform');
app.use(express.json());

  // Enable CORS for all routes
  app.use(cors());

// Start the server
const PORT = process.env.PORT || 5000;


app.listen(PORT, async () => {
    await mongoose
      .connect(
        `mongodb+srv://devidivyasri03:divya@cluster0.wmscd1h.mongodb.net/cyberden?retryWrites=true&w=majority&appName=Cluster0`
      )
      .then(() => {
        console.log("connected to the database");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
    console.log("Server is running...");
  });
  
  
app.get('/',(req,res)=>
{
    res.json({"message":"hello"})
})
// Register a new user
app.post('/register', async (req, res) => {
 try {
 const { name,username,email, password } = req.body;
 
 // Check if the email is already registered
 const existingUser = await User.findOne({ email });
 if (existingUser) {
 return res.status(400).json({ error: 'Email already registered' });
 }
 
 // Create a new user
 const newUser = new User({ name,username,email, password, });
 await newUser.save();
 
 res.status(201).json({ message: 'User registered successfully' });
 } catch (error) {
 console.error('Error registering user:', error);
 res.status(500).json({ error: 'An error occurred while registering the user' });
 }
});
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Password is valid, user is authenticated
  res.status(200).json({ message: 'Login successful' });
});


app.post('/send-message', async (req, res) => {
  const { username, email, phone, message } = req.body;

  // Check if all required fields are present
  if (!username || !email || !phone || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create a new contact form submission
    const newContact = new Contactform({
      username,
      email,
      phone,
      message,
    });

    // Save the new contact form submission to the database
    const savedContact = await newContact.save();

    // Send a success response
    res.status(200).json({
      success: true,
      message: 'Message sent successfully',
      data: savedContact,
    });
  } catch (err) {
    // Handle errors
    console.error('Error sending message:', err);
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    });
  }
});
