const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');


const server = express();

//global middleware
server.use(express.json());
server.use(helmet());
server.use(logger)



server.get('/', (req, res) => {
  res.status(200).json({messageOfTheDay: 'server is working'})
});

function logger(req, res, next) {
  console.log(`${req.method} was requested at ${req.url} on [${new Date().toISOString()}]`)
  next();
};



module.exports = server;