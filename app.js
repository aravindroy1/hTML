const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello DevOps 🚀</h1><p>Sent from a Node.js Server!</p>');
});

app.listen(PORT, () => {
    console.log(`App is humming along at http://localhost:${PORT}`);
});
