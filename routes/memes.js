const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('Here are all of your memes!');
});

router.post('/', (req,res) => {
    res.send("your meme has been created!");
})

router.put('/:id', (req,res) => {
    res.send("your meme has been updated!");
})

module.exports = router;