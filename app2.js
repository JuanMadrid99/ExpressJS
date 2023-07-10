const express = require('express');
const app = express();
const {users} = require('./app2API')

function filtro(peticion, consulta){
  const respuestaP = users[peticion];//los los users de primeros
  const respuestaQ = respuestaP.filter(resp=>resp.book===consulta);
  return JSON.stringify(respuestaQ);
}
app.get('/',(req,res)=>{
  res.send(JSON.stringify(users));
  })
    /* SIN LA FUNCION */
    app.get('/users/:parametro',(req,res)=>{
      const peticion = req.params.parametro;//primeros
      const consulta = req.query.busqueda;//book11

      const respuestaP = users[peticion];//los los users de primeros
      const respuestaQ = respuestaP.filter(resp=>resp.book===consulta); 
      res.send(JSON.stringify(respuestaQ));
    })

    /* CON LA FUNCION FILTRO*/
    app.get('/usuario/:busqueda',(req,res)=>{
      const parametro = req.params.busqueda;
      const consulta = req.query.busqueda;
      res.send(filtro(parametro,consulta));
    })


/* Conexion con el servidor */
    const PORT =3000;
app.listen(PORT,()=>{
  console.log(`El servidor esta escuchando en el puerto ${PORT}`);
})