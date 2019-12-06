const router = require('express').Router();

// import data
const galleryData = require('../data/gallery.json')

// get location data
router.get('/', (req, res) => {
  const forSale = galleryData.filter(galleryItem => parseInt(galleryItem.bid, 10) === 0)
  
  res.send(forSale)
})


router.put('/:id', (req, res) => {
  const galleryItem = galleryData.find(gI => gI.id === req.params.id);
  let count  = ++galleryItem.votes;
  galleryItem.votes = count;
  res.send(galleryItem);
})

module.exports = router
