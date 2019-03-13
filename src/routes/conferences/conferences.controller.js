const db = require('../../db');

let citiesRef = db.collection('conferences');
let allCities = [];

citiesRef
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      allCities.push({
        id: doc.id,
        ...doc.data()
      });
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

const getConferences = (req, res) => {
  //connect to firebase and get snapshot of conferences collection
  res.json({
    data: allCities
  });
};

const addConference = (req, res) => {
  citiesRef
    .add({
      ...req.body
    })
    .then(docRef => {
      console.log('Document written with ID: ', docRef.id);
      res.sendStatus(200);
    })
    .catch(() => res.status(500).send({ error: 'Something went wrong!!' }));
};

module.exports = {
  getConferences,
  addConference
};
