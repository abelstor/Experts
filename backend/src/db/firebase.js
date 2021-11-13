const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./experts-3fb3d-0b360bc1ba72.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = db;

////////////////////////////////////

// db.collection('users').add({
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815
// })
//     .then((docRef) => {
//         console.log('Document written with ID: ', docRef.id);
//     })
//     .catch((error) => {
//         console.error('Error adding document: ', error);
//     });

//////////////////////////////////

// db.collection('users').get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => { doc.name });
//     console.log(doc.name);
// });