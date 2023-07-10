const express = require('express');
const app = express();
const {usuarios} = require('./data/api'); //importamos los datos 
const {users} = require('./data/api'); //importamos los datos 

/* FUNCIONES */
function busquedaQuery(query) { //busqueda con el query de la url
  return  JSON.stringify(users.user1[query]);
}
function busquedaParams(parametro){//busqueda con parametro de la url
  resultado = usuarios.hasOwnProperty(parametro)? JSON.stringify(usuarios[parametro]): "";
  return resultado
}

function busquedaQC(persona='',atributo='',cualidad='',cual=''){
  res = users;
  if (persona!=='') {
    const res1 = res[persona];
    res = res1;
      if (atributo!=='') {
        const res2 = res1[atributo];
        res = res2;
        if (cualidad!=='') {
          const res3 = res2[cualidad];
          res = res3;
          if (cual!=='') {
            const res4 = res3[cual];
            res = res4;
          }
        }
      }
    }
    return JSON.stringify(res);
  }
  module.exports = {
    busquedaParams,
    busquedaQC,
    busquedaQuery
  }

  /* Importamos los routers */
  const {routerUsuario} = require('./routers/usuarios'); //module.exports.routerUsuario = routerUsuario;
  const {routerUser} = require('./routers/users'); //module.exports = routerUser;
  
  /* ROUTERS */ //router que simplifica la ruta de inicio
// const routerUsuario = express.Router(); Los llevamos a sus respectivos archivos 
app.use('/api/usuarios',routerUsuario);
// const routerUser = express.Router(); Los llevamos a sus respectivos archivos
app.use('/api/users',routerUser);


// Middleware para manejar rutas no válidas
app.use('/api',(req, res, next) => {
  res.status(404).send('Ruta no encontrada');
  });


/* EL SERVIDOR ESTA ESCUCHANDO EN EL PUERTO 3000 */  
const PORT = 3000;
app.listen(PORT,(req,res)=>{
  console.log(`El servidor de practica esta escuchando en el puerto: ${PORT}...`);
  console.log(`Direccion: http://localhost:${PORT}`);
  })