const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to the MongoDB Server', err);
  } else {
    console.log('Connected to the MongoDB Server');
    const db = client.db('TodoApp');
    // db.collection('Todos').find({
    //   _id: new ObjectID('5ae0c6f33b5afd06f48b2e0f')
    // }).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });
    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`Todos count:${count}`);
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
      name: 'Saswat'
    }).toArray().then((docs) => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });
  }
  client.close();
});
