const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Arrays to hold table objects
const tables = [{
    ID: "Jajajaja",
    Name: "Hello World",
    Email: "Hello@world.com",
    Phone: 18003333,
}];
const waitingList = [{
    ID: "JajajajaWaiting",
    Name: "Hello World Waiting",
    Email: "Hello@world.com",
    Phone: 18003333,
}];

//Route for homepage
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

//Route for viewing tables
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

//Route for making a new reservation
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

//GET methods to get json objects of data
app.get('/api/tables', (req, res) => res.json(tables));
app.get('/api/waitlist', (req, res) => res.json(waitingList));

//POST method to add new table to appropriate array
app.post('/api/tables', (req, res) => {
    const newTable = req.body;
    if (tables.length >= 5) {
        waitingList.push(newTable);
        res.json(false);
    } else {
        tables.push(newTable);
        res.json(true);
    }
});

//Starts server
app.listen(PORT, () => console.log(`App listening on PORT http://localhost:${PORT}`));