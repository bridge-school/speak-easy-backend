const db = require('../../db');

let citiesRef = db.collection('conferences');

const getConferences = (req, res) => {
  citiesRef
    .get()
    .then(snapshot => {
      res.json({
        data: snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          };
        })
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
      res.json({
        data: 'There was an error getting data'
      });
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
