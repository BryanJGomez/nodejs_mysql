//importamos express
const express = require('express');
const router = express.Router();
const emp = require('../controller')
module.exports = function() {

    router.get('/',
        emp.index
    );

    router.get('/:id',
        emp.obtenerEmpleado
    );

    router.post('/empleados',
        emp.registrar
    );

    router.put('/:id',
        emp.update
    );
    router.delete('/:id',
        emp.borrar
    )
    return router;
}