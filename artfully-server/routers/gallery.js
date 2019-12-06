const router = require('express').Router();

// import data
const galleryData = require('../data/gallery.json')

// get location data
router.get('/', (req, res) => {
  // console.log(galleryData)
  // let highToLow = galleryData.sort((a, b) => {
  //   return a.votes - b.votes
  res.send(galleryData)
  })


router.put('/:id', (req, res) => {
  const galleryItem = galleryData.find(gI => gI.id === req.params.id);
  let count  = ++galleryItem.votes;
  galleryItem.votes = count;
  res.send(galleryItem);
})

module.exports = router
