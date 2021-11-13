const express = require('express');
const dbE = require('./src/db/crudExperts');

const app = express();
const port = 3000;

app.use(express.json());

//? Traer todos los expertos
app.get('/experts', (req, res) => {
    dbE.getExperts((arrayExperts) => {
        res.json(arrayExperts);
    });
});

//? Traer un experto
app.get('/experts/:id', (req, res) => {
    const uid = req.params.id;
    dbE.getExpert(uid, (refDoc) => {
        res.json(refDoc);
    })
});

//? Crear un experto
app.post('/experts', (req, res) => {
    const expert = req.body;
    dbE.addExpert(expert, (status) => {

    })
})


app.listen(port, () => {
    console.log(`Running on port ${port}!`);
});



// const { getExperts } = require('./src/db/crudExperts');
// getExperts();