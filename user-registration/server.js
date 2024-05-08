const express = require('express');  //configure the web server
const bodyParser = require('body-parser'); // used to parse incoming HTTP request bodies in JSON format.(middleware, for ex sak@gmail.com to show in data_list and server) 
const path = require('path'); // Import the path module

const app = express();  //create instance
const PORT = 3004; // You can change this to any port you prefer

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
let userList = [];  //This initializes an empty array to store user registration data.

const userData = [
    { username: "John", email: "john@example.com", loginEmail: "john.login@example.com" },
    { username: "Alice", email: "alice@example.com", loginEmail: "alice.login@example.com" },
    { username: "Bob", email: "bob@example.com", loginEmail: "bob.login@example.com" }
];

// Route to handle user registration
app.post('/register', (req, res) => {    //. It expects JSON data containing username, email, and password in the request body.
    const { username, email, password } = req.body;
    const userData = req.body;
    userList.push(userData);  //This adds the received user data to the userList array.

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


//The AJAX (Asynchronous JavaScript and XML) method is a technique used in web development to send and receive data from a server asynchronously without reloading the entire web page.
//Node.js: Node.js is a runtime environment that allows you to run JavaScript code on the server-side. high-performance network applications.
 //Express.js is a web application framework for Node.js. It provides a robust set of features for building web applications and API.
