const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../jquery-app", 'home.html'));
});

app.get('/finance', (req, res) => {
    res.sendFile(path.join(__dirname, "../jquery-app", 'finance.html'));
});

//allowing express to access the build static directory
app.use('/react', express.static(path.join(__dirname, "../react-app", "build")));

app.get('/react', (req, res) => {
    //serving the build directory
    res.sendFile(path.join(__dirname, "../react-app", 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})
