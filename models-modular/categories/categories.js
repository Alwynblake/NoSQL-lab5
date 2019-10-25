'use strict';

const Model = require('../mongo.js');
const schema = require('./categories-schema.js');

// How can we connect ourselves to the mongo interface?
// What do we export?
// use class--Link the model class with the respective schema

class Categories extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = Categories;
