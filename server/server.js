require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');


//AL crear una carpeta publica tambien
//Siempre pasa por estas lineas
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(require('./routes/usuario'));

app.get('/', (req, res) => {
    res.json("Hola mundo");
});



mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
    if (err) throw err;
    
    console.log('Base de datos ONLINE');
})

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto:", process.env.PORT);
});
