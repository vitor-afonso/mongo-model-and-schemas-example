//jshint esversion:8
const mongoose = require('mongoose');
const Cat = require('./models/Cat');


mongoose
        //exampleApp is the database we are connecting
  .connect('mongodb://localhost/exampleApp', {
    
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return Cat.deleteMany();
  })
  .then( () => addTenCats())
  .catch(err => console.error('Error connecting to mongo', err));

/*
// a new instance of Cat
const kitty = new Cat({ name: 'Ironhacker' });

//save the instance to database
kitty
  .save()
  .then(newCat => console.log(`A new cat is created: ${newCat}!`))
  .catch(err => console.log(`Error while creating a new cat: ${err}`));


// Mongoose’s find() is sending a MongoDB find command to the database
Cat.find()
  .then(catsFromDB => {
    // catsFromDB is a placeholder and represents an array of Cat instances
    catsFromDB.forEach(oneCat => console.log(` --> cat: ${oneCat.name}`));
  })
  .catch(error => console.log(`Error occurred during getting cats from DB: ${error}`));
*/

// same code has before but organized in functions

function addNewCat(catName) {

    const kitty = new Cat({ name: catName });

    kitty
        .save()
        .then(newCat => console.log(`A new cat is created: ${newCat}!`))
        .catch(err => console.log(`Error while creating a new cat: ${err}`));
}

function showCats() {

    console.log('All the CATS!');

    Cat.find()
      .then(catsFromDB => {
        // catsFromDB is an array of Cat instances
        catsFromDB.forEach(oneCat => console.log(` --> cat: ${oneCat.name}`));
      })
      .catch(err => console.log(`Error occurred during getting cats from DB: ${err}`));
}

function addTenCats() {
    for (let i = 0; i < 10; i++) {
      addNewCat(`IronCat ${i}`);
    }
}



/* We have to wait for our cats to save before displaying them
Remember, it's async */
setTimeout(showCats, 1500);


