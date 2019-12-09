const router = require('express').Router();

// import data
const galleryData = require('../data/gallery.json')

// get location data
router.get('/', (req, res) => {

  let highToLow = galleryData.sort((a, b) => {
    return a.votes - b.votes
  })

  const topThree = highToLow.slice(-3)

  const idKeys = topThree.map(obj => obj.id)

  const sold = galleryData.filter(galleryItem => galleryItem.bid >= 5 && !idKeys.includes(galleryItem.id))
  res.send(sold)  
})

module.exports = router