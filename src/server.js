const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb://localhost:27018/omnistack8',
  { useNewUrlParser: true, useFindAndModify: true }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);