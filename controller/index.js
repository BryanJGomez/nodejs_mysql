
const { query } = require('../database/conexion');
const mysqlConexion = require('../database/conexion');


exports.index = (req, res, next)=>{
    mysqlConexion.query('SELECT * FROM empleados', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
};

exports.obtenerEmpleado = (req, res, next) =>{
    const {id}= req.params;
    mysqlConexion.query('SELECT * FROM empleados WHERE id= ?', [id], (err, rows, fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    } );
};

exports.registrar = (req, res, next)=>{
    const {id, nombre, salario} = req.body;
    console.log(req.body);
    const  query = `
    SET @id = ?;
    SET @nombre = ?;
    SET @salario = ?;
   
    CALL empleadoAddOrEdit(@id, @nombre, @salario);
    `;
    mysqlConexion.query(query, [id, nombre, salario], (err, rows, fields)=>{
        if(!err){
            res.json({Status: "ok"});
        }else{
            console.log(err);
        }
    })
}

exports.update = (req, res, next)=>{
    const {nombre, salario} = req.body;
    const {id} = req.params;
    console.log(req.body);
    console.log(req.params);
    const  query = `
    SET @id = ?;
    SET @nombre = ?;
    SET @salario = ?;
   
    CALL empleadoAddOrEdit(@id, @nombre, @salario);
    `;
    mysqlConexion.query(query,[id, nombre, salario], (err, rows, fields)=>{
        if(!err){
            res.json({Status: "Empleado Actualizado"});
        }else{
            console.log(err)
            next();
        }
    })
}

exports.borrar = (req, res, next)=>{
    const {id} = req.params
    mysqlConexion.query('DELETE FROM empleados WHERE id = ?', [id], (err, rows, fields)=>{
        if(!err){
            res.json({Status: "Empleado eliminado"});
        }else{
            console.log(err);
            next();
        }
    })
}