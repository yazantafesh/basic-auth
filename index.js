'use strict';

// 3rd Party Resources
const express = require('express');
const mongoose = require('mongoose');
const server = require('./src/server');
require('dotenv').config();



mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:false})
  .then(() => {
   server.start(process.env.PORT);
  })
  .catch(e => console.error('Could not start server', e.message));