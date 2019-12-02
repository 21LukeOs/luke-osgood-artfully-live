const router = require('express').Router();

// import data
const galleryData = require('../data/gallery.json')

// get location data
router.get('/', (req, res) => {
  let highToLow = galleryData.sort((a, b) => {
    return a.votes - b.votes
  })
  res.send(highToLow)
})

module.exports = router