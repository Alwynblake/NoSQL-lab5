'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?
const schema = require('./categories-schema');

class Categories {

  constructor() {
    // check this out
    this.database = [];
  }

  get(_id) {
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }
    if(_id) {
      return schema.findOne({_id});
    } else {
      return schema.find({});
    }
  }

  create(record) {
    // Call the appropriate mongoose method to create a new record
    if(!record.name) {
      throw new Error('record must contain a name value');
    }
    let newRecord = new schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    console.log('id', _id);
    console.log('record', record);
    // Call the appropriate mongoose method to update a record
    schema.findByIdAndUpdate(_id, record, function (err, category) {
      console.log('id inside method', _id);
      console.log('record inside method', record);
      if (err) {
        console.error(err);
        return;
      }
      return category;
    });

  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
    schema.findByIdAndDelete(_id, function (err) {
      if (err) {
        console.error(err);
        return;
      }
      return;
    });
  }

}

module.exports = Categories;
