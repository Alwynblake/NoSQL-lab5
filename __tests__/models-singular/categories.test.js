const Categories = require('../../models-singular/categories.js');
let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', (done) => {
    let obj = {
      name: 'Alistair',
      description: 'really cool',
    };
    return categories.create(obj)
      .then(record => {
        expect(record.name).toEqual('Alistair');
        expect(record.description).toEqual('really cool');
        done();
      });
  });

  it('will throw an error if create() is not passed a name', () => {
    let obj = {
      description: 'really cool',
    };
    expect(() => categories.create(obj)).toThrow();
  });

  it('can get() a category', (done) => {
    return categories.get()
      .then(results => {
        expect(results.length).toBe(1);
        done();
      });
  });

  it('can get() all categories', (done) => {
    let obj1 = {
      name: 'Alistair1',
      description: 'really cool1',
    };
    let obj2 = {
      name: 'Alistair2',
      description: 'really cool2',
    };
    categories.create(obj1);
    return categories.create(obj2)
      .then(() => {
        return categories.get()
          .then(results => {
            expect(results.length).toBe(3);
            done();
          });
      });
  });


  // it('can update() a category', () => {
  //   let record = {
  //     name: 'Alistair1.0',
  //     description: 'really cool 1.0',
  //   };

  //   let updatedCategory = categories.update({name: 'Alistair'}, record);
  //   console.log('updatedCategory', updatedCategory);
  //   // .then(results => {
  //   //   console.log('results', results);
  //   // });
  // });

  // it('can delete() a category', () => {
  //   expect(categories.delete({
  //     _id: '5db270b96b43a6e9bd479b77',
  //   })).toEqual('hello');
  // });

});
