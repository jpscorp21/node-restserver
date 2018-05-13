require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//AL crear una carpeta publica tambien
//Siempre pasa por estas lineas
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json("Hola mundo");
});

app.get('/usuario', (req, res) => {
    res.json('get Usuario');
})

app.post('/usuario', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'            
        });
    } else {
        res.json({
            persona: body
        });
    }

    res.json({
        persona: body
    });
})

app.put('/usuario/:id', (req, res) => {
    //Extrae el id del parametro
    let id = req.params.id;

    res.json({
        id
    });
})

app.delete('/usuario', (req, res) => {
    res.json('delete Usuario');
})

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto:", process.env.PORT);
});
