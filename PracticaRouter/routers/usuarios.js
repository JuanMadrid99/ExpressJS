const express = require('express');
const routerUsuario = express.Router();
const {usuarios} = require('../data/api');

/* Middleware */ //Las funciones middleware se ejecutan: - Después de recibir una solicitud. - Antes de enviar una respuesta
// Tienen acceso al objeto de Ia solicitud, al objeto de Ia respuesta y a next(), una funci6n que se llama para ejecutar el pr6ximo middleware..
routerUsuario.use(express.json()); //Esto nos permitira procesar el cuerpo de la solicitud en formato JSON y poder trabajar con ese cuerpo en el codigo como la propiedad body lo realizara antes de las rutas y para cualquier tipo de metodo HTTP


/* importamos la funcion para buscar con parametros */
const {busquedaParams} = require('../app.js');


routerUsuario.get('/',(req,res)=>{
    res.send(JSON.stringify(usuarios))

    //camino valido pero sin contenido error 204...se le puede dar al usuario una lista de los lugares a los que podria referirse
})
//Otorga los datos del usuario solicitado
routerUsuario.get('/:usuario',(req,res)=>{
        const parametro = req.params.usuario
        resultado = (busquedaParams(parametro))
        resultado!==""?res.send(resultado):res.status(404).end(); //camino valido pero sin contenido error 204...se le puede dar al usuario una lista de los lugares a los que podria referirse
        })//http://localhost:3000/api/usuarios/usuario1... muestra el usuario1 

/* utilizaremos el metodo POST */
routerUsuario.post('/', (req,res)=>{
    let nuevaMascota = req.body; //recibe los datos
    usuarios.usuario3.push(nuevaMascota) //los agrega al arreglo con el metodo push que hace que haagreguen los datos al final del arreglo 
    res.send(JSON.stringify(usuarios.usuario3)) // mandamos la info de los users para que el usuario verifique
    // se simula en index.http
    // Todo se ejecutara despues de la linea 7
    });

/* utilizaremos el metodo DELETE */
routerUsuario.delete('/usuario3/:parametro',(req,res)=>{
    const eliminar = req.params.parametro;
    const i = usuarios.usuario3.findIndex(animal=>animal.nombre === eliminar)
    if (i >= 0) {
        usuarios.usuario3.splice(i,1)//eliminamos el de la posicion del indice (i) y solo eliminamos 1
    }
    res.send(JSON.stringify(usuarios.usuario3))//tambien se puede usar res.json
    })

/* Exportar el router  */
module.exports.routerUsuario = routerUsuario;

