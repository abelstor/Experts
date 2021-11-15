const express = require('express');
const dbE = require('./src/db/crudExperts');
const app = express();
const port = 3000;

app.use(express.json());

//? Traer todos los expertos
app.get('/experts', (req, res) => {
    dbE.getExperts((arrayExperts) => {
        res.json(arrayExperts);
    })
});

//? Traer un experto específico
app.get('/experts/:id', (req, res) => {
    const uid = req.params.id;
    dbE.getExpert(uid, (refDoc) => {
        res.json(refDoc);
    })
});

//? Crear un experto en la DB
app.post('/experts', (req, res) => {
    const expert = req.body;
    dbE.addExpert(expert, (status) => {
        res.json(status);
    })
});

//? Actualizar totalmente un experto en la DB
app.put('/experts/:id', (req, res) => {
    const uid = req.params.id;
    const expert = req.body;

    dbE.updateExpertTotally(uid, expert, (status) => {
        res.json(status);
    })
});

//? Actualizar parcialmente un experto en la DB
app.patch('/experts/:id', (req, res) => {
    const uid = req.params.id;
    const expert = req.body;

    dbE.updateExpertPartially(uid, expert, (status) => {
        res.json(status);
    })
});

//? Borrar un experto de la DB
app.delete('/experts/:id', (req, res) => {
    const uid = req.params.id;

    dbE.deleteExpert(uid, (status) => {
        res.json(status);
    })
});


app.listen(port, () => {
    console.log(`Running on port ${port}!`);
});