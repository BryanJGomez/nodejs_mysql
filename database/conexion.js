const mysql = require('mysql');

const mysqlConexion = mysql.createConnection({
    host: 'localhost',
    user: 'bryanJ',
    password:'bryan98Gomez',
    database: 'company',
    multipleStatements:true

});

mysqlConexion.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('database is connected');
    }
    
});

module.exports = mysqlConexion;