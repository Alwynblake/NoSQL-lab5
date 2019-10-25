const Products = require('../../models-singular/products.js');
let products = new Products();

const supergoose = require('../supergoose.js');

describe('Products Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new product', (done) => {
    let obj = {
      name: 'Alistair',
      description: 'really cool',
      flavor: 'lime',
    };
    return products.create(obj)
      .then(record => {
        expect(record.name).toEqual('Alistair');
        expect(record.description).toEqual('really cool');
        expect(record.flavor).toEqual('lime');
        done();
      });
  });

  it('will throw an error if create() is not passed a name', () => {
    let obj = {
      description: 'really cool',
    };
    expect(() => products.create(obj)).toThrow();
  });

  it('can get() a product', (done) => {
    return products.get()
      .then(results => {
        expect(results.length).toBe(1);
        done();
      });
  });

  it('can get() all products', (done) => {
    let obj1 = {
      name: 'Alistair1',
      description: 'really cool1',
      flavor: 'lime1',
    };
    let obj2 = {
      name: 'Alistair2',
      description: 'really cool2',
      flavor: 'lime2',
    };
    products.create(obj1);
    return products.create(obj2)
      .then(() => {
        return products.get()
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