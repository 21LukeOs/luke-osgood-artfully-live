const router = require('express').Router();

// import data
const galleryData = require('../data/gallery.json')

// get location data
router.get('/', (req, res) => {
  let highToLow = galleryData.sort((a, b) => {
    return a.votes - b.votes
  })
  let topThree = [highToLow[highToLow.length - 1], highToLow[highToLow.length - 2], highToLow[highToLow.length - 3]]
  res.send(topThree)
})

module.exports = router