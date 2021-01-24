const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index')

//Setting
const port = process.env.PORT || 4000;


//Midellwares
//habilitamos el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/', routes());

//inciando los servicios
app.listen( port,  ()=>{
    console.log(`el servidro esta funcionando en el puerto: ${port}`)
})