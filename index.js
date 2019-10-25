'use strict';

// Require your model
const mongoose = require('mongoose');

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

// Connect it to a mongoose database:
mongoose.connect('mongodb://localhost:27017/class05', {
  userNewUrlParser: true,
  useUnifiedTopology: true,
});

// Do some work (use schema & turn them into models):


// Disconnect
mongoose.disconnect();