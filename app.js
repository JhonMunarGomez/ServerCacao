const express=require('express');
const bodyparser=require('body-parser');
const conexion= require('./conexion/conexion');
const path = require('path');
const app=express();
const routes= require('./router');
const cors=require('./cors');

//Usos de la App
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors.permisos);
app.use(express.static(__dirname + '/public'));


conexion.inicia();
routes.configurar(app);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });
module.exports=app;