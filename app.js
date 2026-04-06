const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serves the HTML from the public folder
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
});
