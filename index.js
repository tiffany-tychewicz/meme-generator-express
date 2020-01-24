const express = require('express');
const cors = require('cors')
const memeRoutes = require('./routes/memes')

const app = express();

app.use('/api/memes', memeRoutes)

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);