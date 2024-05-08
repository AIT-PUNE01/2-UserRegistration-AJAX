const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module

const app = express();
const PORT = 3004; // You can change this to any port you prefer

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
let userList = [];

const userData = [
    { username: "John", email: "john@example.com", loginEmail: "john.login@example.com" },
    { username: "Alice", email: "alice@example.com", loginEmail: "alice.login@example.com" },
    { username: "Bob", email: "bob@example.com", loginEmail: "bob.login@example.com" }
];

// Route to handle user registration
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const userData = req.body;
    userList.push(userData);

    // Here you can validate the data, save it to a database, etc.
    // For simplicity, let's just log the received data
    console.log('Received registration data:', { username, email, password });

    // Send a simple response indicating success
    res.status(200).send('User registered successfully!');
});
// Route to handle GET requests for user data
app.get('/userList', (req, res) => {
    res.json({ userList });; // Send the user data as a JSON response
});
// Serve HTML file for data list page
app.use(express.static('public'));


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
