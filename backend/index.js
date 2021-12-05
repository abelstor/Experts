const express = require('express');
const dbE = require('./src/db/crudExperts');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(express.json());
app.use(cors());

//? Traer todos los expertos
app.get('/experts', (req, res) => {
    dbE.getExperts((arrayExperts) => {
        res.json(arrayExperts);
    })
});

//? Traer un experto específico por id
app.get('/experts/:id', (req, res) => {
    const uid = req.params.id;
    dbE.getExpert(uid, (refDoc) => {
        res.json(refDoc);
    })
});

//? Crear un experto en la DB
app.post('/experts', (req, res) => {
    const expert = req.body;
    try {
        dbE.addExpert(expert, (status) => {
            res.status(201).json(status);
        })
    } catch (error) {
        res.status(503).json(error);
    }
});

//? Crear un experto en la DB con el ID de Firebase
app.post('/experts/:id', (req, res) => {
    const uid = req.params.id;
    const expert = req.body;
    expert.id = uid;
    dbE.addExpertWithID(uid, expert, (status) => {
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


//? Buscar un experto por parámetro ( location )
app.get('/experts/search/:location', (req, res) => {
    const location = req.params.location;
    dbE.searchExpert(location, (refDoc) => {
        res.json(refDoc);
    })
})


app.listen(port, () => {
    console.log(`Running on port ${port}!`);
});