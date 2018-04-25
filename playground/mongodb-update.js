const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to the MongoDB Server', err);
  } else {
    console.log('Connected to the MongoDB Server');
    const db = client.db('TodoApp');
    db.collection('Todos').findOneAndUpdate({
      text: 'Some Lunch'
    }, {
      $set: {
        completed: false
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });

    db.collection('Users').findOneAndUpdate({
      name: 'Saswat'
    }, {
      $set: {
        name: 'Sana'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });
  }
  client.close();
});
