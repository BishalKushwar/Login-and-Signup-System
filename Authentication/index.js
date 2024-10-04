const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/UserRoute'); 
const cors = require('cors'); 
const database = require('./utils/Database'); 

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS if needed
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use('/api/auth', userRoutes); // User-related routes

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5000; // Use the specified port or default to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
