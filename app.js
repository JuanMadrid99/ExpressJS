const express = require('express');
const app = express();

const {infoCursos} = require('./cursos');
/* ROUTER EN EXPRESS nos ayduan a reutilizar codigo que se repite en las urls */
const routerMatematica = express.Router();
app.use('/api/cursos/matematicas',routerMatematica);


function filtrar(parametro,nivel,orden){
  const resultadoM = infoCursos[parametro];
  const resultadoF = resultadoM.filter((filtro)=>filtro.nivel===nivel);
  const resultadoO = resultadoF.sort((a,b)=>b.vistas - a.vistas)//orden de mayor a menor
  if(orden==="vistas"){
    return JSON.stringify(resultadoO);
  }
  return JSON.stringify(resultadoF)//deberia dar orden de menor a mayor porque asi es el objeto original
}
// routing
// Manejar una solicitud get en el camino
app.get('/',(req,res)=>{
    res.send("Mi primer servidor con Express.js");
    })
    app.get('/api/cursos',(req,res)=>{
      res.send(infoCursos)
      }) 
    app.get('/api/cursos/:materia',(req,res)=>{ 
    //http://localhost:3000/api/cursos/:materia?nivel=basico&orden=vistas
      const parametro = req.params.materia;
      const nivel = req.query.nivel || '';
      const orden = req.query.orden || '';
      if (!(nivel.length || orden.length)) {
        return res.send(infoCursos[parametro])
      }
      res.send(filtrar(parametro,nivel,orden));
      })
    
    





          /* MATEMATICA */
    /* app.get('/api/cursos/matematica',(req,res)=>{
        res.send(JSON.stringify(infoCursos.matematica))
        })  */
    //   app.get('/api/cursos/matematica',(req,res)=>{
    //       const asignatura = req.query.variable;
    //       const resultado = infoCursos.matematica.filter(curso => curso.tema===asignatura);
    //       if (resultado.length === 0) {
    //           return  res.status(404).send(`La asignatura no esta disponible: ${asignatura}`);
    //       };
    //       res.send(JSON.stringify(resultado));
    //       })

    //       /* PROGRAMACION */
    // app.get('/api/cursos/programacion',(req,res)=>{
    //     res.send(JSON.stringify(infoCursos.programacion))
    //     })
    //   app.get('/api/cursos/programacion/:lenguaje',(req,res)=>{//:lenguaje para manejar los prametros de busqueda de los lenguajne de progrmacion
    //       const clase = req.params.lenguaje;
    //       const resultado = infoCursos.programacion.filter(cursos => cursos.lenguaje ===clase)
    //       if (resultado.length ===0 ) {
    //           return res.status(404).send(`No se encontraron cursos de ${clase}`);}
          
    //       const busqueda = req.query.ordenar; // tomamos los parametros de busqueda del query 
    //       if (busqueda === "vistas") {
    //           return res.send(JSON.stringify(resultado.sort((a,b)=>b.vistas - a.vistas)));}  

    //       res.send(JSON.stringify(resultado));
    //       // console.log(req.query.ordenar); nos da que tipo de busqueda hizo
    //       })
    //   app.get('/api/cursos/programacion/:lenguaje/:nivel',(req,res)=>{
    //       const lenguaje = req.params.lenguaje;
    //       const nivel = req.params.nivel;
    //       const resultado = infoCursos.programacion.filter(busqueda => busqueda.lenguaje === lenguaje && busqueda.nivel === nivel);
    //       if (resultado.length===0) {
    //               return res.status(404).send("No se encontro nada");
    //           }
    //       res.send(JSON.stringify(resultado));
    //       })





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
