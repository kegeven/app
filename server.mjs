import express from 'express';
const cors = require('cors');
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 5500;

// Enable CORS to allow requests from any origin (for development purposes)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// Define the '/proxy' endpoint on the server
app.get('/proxy', async (req, res) => {
    const targetWebsite = 'https://randomavatar.com';

    try {
        const response = await fetch(targetWebsite);
        const data = await response.text();
        res.send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
