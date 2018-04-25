//const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb'); //same as above.but its called destructuring
var obj = new ObjectID();
console.log(obj);
var user = {
  name: 'Saswat',
  age: 29
};
var {
  name
} = user; //destructure of object
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to the MongoDB Server', err);
  } else {
    console.log('Connected to the MongoDB Server');
    const db = client.db('TodoApp');
    db.collection('Todos').insertOne({
      text: 'Something to do',
      completed: false
    }, (err, result) => {
      if (err) {
        console.log("Unable to insert todo", err);
      } else {
        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    });
    //Inserting Users
    db.collection('Users').insertOne({
      name: 'Saswat',
      Age: 29,
      location: 'Bangalore'
    }, (err, result) => {
      if (err) {
        console.log("Unable to insert Users", err);
      } else {
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log('Timestamp', result.ops[0]._id.getTimestamp());
      }
    });
  }
  client.close();
});