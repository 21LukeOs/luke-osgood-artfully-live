const express = require('express');
const cors = require('cors');
const server = express();

const galleryRoute = require('./routers/gallery');
const leaderboard = require('./routers/leaderboard');
const yourArt = require('./routers/sold');

//middleware
server.use(cors());
//decode the POST from the client
server.use(express.json());

//routes
server.use('/leaderboard', leaderboard)
server.use('/gallery', galleryRoute)
server.use('/yourArt', yourArt)

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server is ready (port: ${port})`);
});