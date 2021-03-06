const router = require('express').Router();

// import data
const galleryData = require('../data/gallery.json')

// get location data
router.get('/', (req, res) => {
  let highToLow = galleryData.sort((a, b) => {
    return a.votes - b.votes
  })

  const topThree = highToLow.slice(-3)

  res.send(topThree)
})

router.put('/:id', (req, res) => {
  const galleryItem = galleryData.find(gI => gI.id === req.params.id);
  let count = galleryItem.bid + 5;
  galleryItem.bid = count;
  res.send(galleryItem);
})

module.exports = router