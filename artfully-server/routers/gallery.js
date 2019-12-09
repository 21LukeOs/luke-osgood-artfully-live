const router = require('express').Router();
const gallery = require('../data/gallery.json')
const generate = require('nanoid/generate')

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

router.post('/', (request, response) => {
  const newPic = {
    id: generate('1234567890', 7),
    title: request.body.title,
    artist: request.body.artist,
    uploader: "blah",
    image: request.body.image,
    votes: 0,
    bid: 0
  }
  gallery.unshift(newPic)
  response.send(newPic);
})

module.exports = router
