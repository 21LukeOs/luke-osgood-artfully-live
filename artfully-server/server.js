const express = require('express');
const cors = require('cors');

const app = express();

//middleware
server.use(cors());
//decode the POST from the client
server.use(express.json());




const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server is ready (port: ${port})`);
});