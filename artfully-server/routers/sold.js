const router = require('express').Router();

// import data
const galleryData = require('../data/gallery.json')

// get location data
router.get('/', (req, res) => {

  let highToLow = galleryData.sort((a, b) => {
    return a.votes - b.votes
  })

  const topThree = highToLow.slice(-3)
   console.log(topThree)

  const idKeys = topThree.map(obj => obj.id)
  console.log(parseInt(idKeys, 10))

  const sold = galleryData.filter(galleryItem => parseInt(galleryItem.bid, 10) >= 5 && !idKeys.includes(galleryItem.id))
  // console.log(sold)
  res.send(sold)  
})

module.exports = router