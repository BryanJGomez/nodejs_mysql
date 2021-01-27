const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index')






//Midellwares
//habilitamos el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/', routes());

//inciando los servicios

app.listen(process.env.PORT? process.env.PORT : "3000",()=>{
    console.log('Servidor funcionando',  process.env.BD_HOST);
})
