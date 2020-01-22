const express = require('express');
var cors = require('cors')
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/api/index', (req,res) => {
    res.send('Here are all of your memes!');
    console.log('Here are all of your memes!');
});

app.post('/api/create', (req,res) => {
    res.send("your meme has been created!")
    console.log("your meme has been created!")
})

app.put('/api/update/:id', (req,res) => {
    res.send("your meme has been updated!")
    console.log("your meme has been updated!")
})

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);