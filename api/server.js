const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');
const cors = require('cors')

const usersRouter = require('../users/usersRouter')
const authRouter = require('../auth/authRouter')
const server = express();

//global middleware
server.use(express.json());
server.use(helmet());
server.use(logger)
server.use(cors())

server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
  res.status(200).json({message: 'server is working'})
});

async function logger(req, res, next) {
  console.log(`${req.method} was requested at ${req.url} on [${new Date().toISOString()}]`)
  next();
};



module.exports = server;