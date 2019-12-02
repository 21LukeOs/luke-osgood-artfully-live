const express = require('express');
const cors = require('cors');
const server = express();

const galleryRoute = require('./routers/gallery');
const leaderboard = require('./routers/leaderboard');

//middleware
server.use(cors());
//decode the POST from the client
server.use(express.json());

//routes
server.use('/', leaderboard)
server.use('/gallery', galleryRoute)

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server is ready (port: ${port})`);
});