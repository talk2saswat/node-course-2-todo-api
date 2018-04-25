const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to the MongoDB Server', err);
  } else {
    console.log('Connected to the MongoDB Server');
    const db = client.db('TodoApp');
    // db.collection('Todos').deleteMany({
    //   text: 'Something to do'
    // }).then((result) => {
    //   console.log(result);
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').deleteOne({
    //   text: 'Eat Lunch'
    // }).then((result) => {
    //   console.log(result);
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').findOneAndDelete({
    //   text: 'Eat Lunch'
    // }).then((result) => {
    //   console.log(result);
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    // db.collection('Users').findOneAndDelete({
    //   name: 'Saswat'
    // }).then((result) => {
    //   console.log(result);
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').deleteMany({
      name: 'Saswat'
    }).then((result) => {
      console.log(result);
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });
  }
  client.close();
});
