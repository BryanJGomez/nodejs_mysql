const dotenv = require('dotenv');
dotenv.config();
const mysql = require('mysql');


const mysqlConexion = mysql.createConnection(
    {
        host: process.env.BD_HOST,
        user: process.env.BD_USER,
        password: process.env.BD_PASS,
        database: process.env.BD_NOMBRE,
        port: process.env.BD_PORT,
        multipleStatements:true
    },
    "single"
);

mysqlConexion.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('database is connected');
    }
    
});

module.exports = mysqlConexion;