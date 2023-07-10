const express = require('express');
const app = express();

const {infoCursos} = require('./cursos');
function busquedaRQ(peticionR,peticionQ){
  const busquedaR = peticionR;
  const busquedaQ = peticionQ;
  const resultado = infoCursos[busquedaR];
    if(busquedaQ==="dificultad"){
        // return JSON.stringify(resultado.sort((a,b)=>{a.dificultad - b.dificultad}));
        return peticionR
    }
}

// routing
// Manejar una solicitud get en el camino
app.get('/',(req,res)=>{
    res.send("Mi primer servidor con Express.js");
    })
  app.get('/api/cursos/:materia',(req,res)=>{
    const peticionR = req.params.materia;
      // res.send(busquedaRQ(req.params.materia,req.query.ordenar));
      console.log(busquedaRQ(peticionR,req.query.ordenar));
      })









// Middleware para manejar rutas no válidas
app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada');
});
// Al utilizar process.env.PORT en tu aplicación, le estás diciendo al servidor que escuche las conexiones en el puerto especificado en esa variable de entorno.
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`El servidor esta escuchando en el puerto: ${PORT}...`);
    console.log('La direccion es http://localhost:3000');
})
