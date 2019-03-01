const db = require('../../db');

let citiesRef = db.collection('conferences');
let allCities = [];

citiesRef
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      allCities.push({
        [doc.id]: doc.data()
      });
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

const conferenceController = (req, res) => {
  //connect to firebase and get snapshot of conferences collection
  res.json({
    data: allCities
  });
};

module.exports = {
  conferenceController
};
