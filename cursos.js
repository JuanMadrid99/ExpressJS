// deberia de ser una base de datos pero para fines de educacion se usa esto 
let infoCursos = {
  programacion: [
    {
      id: 1,
      titulo: "aprende python",
      lenguaje: "python",
      vistas: 100,
      nivel: "basico",
      dificultad:1
    },
    {
      id: 2,
      titulo: "aprende python",
      lenguaje: "python", 
      vistas: 200,
      nivel: "intermedio",
      dificultad:2
    },
    {
      id: 3,
      titulo: "aprende js",
      lenguaje: "JS",
      vistas: 300,
      nivel: "basico",
      dificultad:1
    },
  ],
  matematica: [
    {
      id: 1,
      titulo: "aprende calculo",
      tema: "calculo",
      vistas: 400,
      nivel: "basico",
      dificultad:1
    },
    {
      id: 2,
      titulo: "aprende algebra",
      tema: "algebra",
      vistas: 500,
      nivel: "basico",
      dificultad:1
    },
  ],
};
//lo exportamos 
module.exports.infoCursos = infoCursos;
