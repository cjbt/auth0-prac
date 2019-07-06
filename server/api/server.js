const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/authRouter');
const usersRouter = require('./users/usersRouter');

const server = express();

// middlewares

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());

// routes

server.use('/auth', authRouter);
server.use('/api/users', usersRouter);

// test if api works

server.get('/', (req, res) => {
  res.send('Api works!');
});

module.exports = server;
