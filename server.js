// NOTE - Installs Express
const express = require('express');
// NOTE Invoke Express
const app = express();
// NOTE Setup Port To Bind To:
const port = process.env.PORT || 3000;
const path = require('path');


// SECTION Middleware:

// NOTE Middleware that allows CORS (security):
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(express.static('views'));
app.use(express.static(__dirname + '/public'));

// SECTION Routes
// NOTE HTTP GET Request for root path:
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// NOTE HTTP GET Request for /api/albums path:
app.get('/api/albums', (req, res) => {
    res.json(albums);
})

// NOTE Start Server on Port
app.listen(port, () => console.log(`App listening at ${port}`))


// ANCHOR Data

const albums = [
    {
      title: 'Cupid Deluxe',
      artist: 'Blood Orange'
    },
    {
      title: 'M3LL155X - EP',
      artist: 'FKA twigs'
    },
    {
      title: 'Fake History',
      artist: 'letlive.'
    }
  ];