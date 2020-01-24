const mongoose = require('mongoose')

const memeSchema = new mongoose.Schema({
  topText: String,
  bottomText: String,
  memeUrl: {
    type: String,
    required: true
  }
})

const Meme = mongoose.model('Meme', memeSchema)

module.exports = Meme