const db = require('./firebase.js');

//! Obtener Todos los expertos.
const getExperts = (callback) => {
  return db.collection('experts').get()
    .then((docs) => {
      var arrayExperts = [];
      docs.forEach((expert) => {
        // console.log(user.data());
        arrayExperts.push(expert.data())
      });
      callback(arrayExperts);
    }).catch((error) => {
      callback(`Error to get users ${error}`);
    })
}

//! Obteenr un experto específico.
const getExpert = (uid, callback) => {
  return db.collection('experts').doc(uid).get()
    .then((refDoc) => {
      callback(refDoc.data())
    }).catch((error) => {
      callback(`Error to get users ${error}`);
    })
}

//! Crear un experto.
const addExpert = (expert, callback) => {
  return db.collection('experts').add(expert)
    .then(() => {
      callback('Success');
    }).catch((error) => {
      callback(`Error to get users ${error}`);
    })
}

//! Actualizar todo un experto
const updateExpertTotally = (uid, expert, callback) => {
  return db.collection('experts').doc(uid).set(expert)
    .then(() => {
      callback('Success')
    }).catch((error) => {
      callback(`Error to get users ${error}`);
    })
}

//! Actualizar un dato específico de un experto
const updateExpertPartially = (uid, expert, callback) => {
  return db.collection('experts').doc(uid).update(expert)
    .then(() => {
      callback('Success')
    }).catch((error) => {
      callback(`Error to get users ${error}`);
    })
}

//! Borrar un expert
const deleteExpert = (uid, callback) => {
  return db.collection('experts').doc(uid).delete()
    .then(() => {
      callback('Success')
    }).catch((error) => {
      callback(`Error to get users ${error}`);
    })
}



// const expert = {
//   'Name': 'Abel Cañas',
//   'Location': 'Bucaramanga, Colombia',
//   'Occupation': 'Desarrollador frontend'
// }

//? Para Probar los métodos
// addExpert(expert, (status) => {
//   console.log(status);
// })

// deleteExpert('0gjstHiGNIZ5j2EFFpVj', (status) => {
//   console.log(status);
// })

/*
getExpert('9gucLjdMurDolkz8MsMS', (expertData) => {
  console.log(expertData);
})

//?-------------------------
*/

// updateExpert('l1Y6I9sFzNMz166XfYGD', expert, (status) => {
//   console.log(status);
// })

module.exports = {
  getExperts,
  getExpert,
  addExpert,
  deleteExpert,
  updateExpertTotally,
  updateExpertPartially
};
