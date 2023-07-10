const express = require('express');
const routerUser = express.Router();
const {users} = require('../data/api'); // traemos los datos de users de practica api

/* Middleware */ //Las funciones middleware se ejecutan: - Después de recibir una solicitud. - Antes de enviar una respuesta
// Tienen acceso al objeto de Ia solicitud, al objeto de Ia respuesta y a next(), una funci6n que se llama para ejecutar el pr6ximo middleware..
routerUser.use(express.json()); //Esto nos permitira procesar el cuerpo de la solicitud en formato JSON y poder trabajar con ese cuerpo en el codigo como la propiedad body lo realizara antes de las rutas y para cualquier tipo de metodo HTTP

// Importamos la funcion BusquedaQC porque se usa aqui
const {busquedaQC,busquedaQuery}= require('../app')

//Otorga del usuario1 el atributo asignado en el query
routerUser.get('/user1',(req,res)=>{
    const query = req.query.consulta;
    res.send(busquedaQuery(query))
    })//http://localhost:3000/api/users/user1?consulta=nombre ....."Madrid Juan"

routerUser.get('/',(req,res)=>{
    const persona = req.query.persona;
    const atributo = req.query.atributo;
    const cualidad = req.query.cualidad;
    const cual = req.query.cual;
    res.send(busquedaQC(persona,atributo,cualidad,cual));
    })//http://localhost:3000/api/users?persona=user1&atributo=cualidades&cualidad=fisicas&cual=fuerza..."normal"

routerUser.get('/:persona/:atributo/:cualidad/:cual',(req,res)=>{
    const persona = req.params.persona;
    const atributo = req.params.atributo;
    const cualidad = req.params.cualidad;
    const cual = req.params.cual;
    res.send(busquedaQC(persona,atributo,cualidad,cual));
    })//http://localhost:3000/api/users/user1/cualidades/fisicas/fuerza..."normal"
// se nesecita poner toda la ruta porque asi esta definido el url
/* CONCLUSION */// usar solo los parametros para lo fijo y los query tanto como desee navegar en el objeto

/* utilizaremos el metodo PUT */  
routerUser.put('/user3/:id',(req,res)=>{
    let mascotaActualizada = req.body; // tienen que ir todos los datos, no solo los que deseen actualizar...(deben ir todas las propiedades)
    const mascota = parseInt(req.params.id);
    
    const i = users.user3.findIndex(pet=>pet.id == mascota); // lo que cumpla esa condicion va para indice , si no encuentra nada se retorna un -1
    if(i >= 0){
      users.user3[i] = mascotaActualizada;
      }
  
    res.send(JSON.stringify(users.user3))//mandamos los datos actualizados
    // se simula en index.http
    // Todo se ejecutara despues de la linea 7
  })

/* utilizaremos el metodo patch */  
routerUser.patch('/user3/:id',(req,res)=>{
  let infoActual = req.body; // tienen que ir todos los datos, no solo los que deseen actualizar...(deben ir todas las propiedades)
  const mascota = parseInt(req.params.id);
  
  const i = users.user3.findIndex(pet=>pet.id == mascota); // lo que cumpla esa condicion va para indice , si no encuentra nada se retorna un -1
  if(i >= 0){
    const propiedad = users.user3[i];
    Object.assign(propiedad,infoActual);//se asigna la informacion actualizada a la propiedad que desea modificar
    }

  res.send(JSON.stringify(users.user3))//mandamos los datos actualizados
  // se simula en index.http
  // Todo se ejecutara despues de la linea 7
})

// para ver los cambios del put
routerUser.get('/user3',(req,res)=>{
  res.send(JSON.stringify(users.user3))
  })


/* Exportamos el router */
// module.exports = routerUser;
module.exports.routerUser = routerUser;
// module.exports es el objeto de exportacion .routerUser es la propiedad