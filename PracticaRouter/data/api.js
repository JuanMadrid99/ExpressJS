const usuarios = {
    "usuario1": {
        "rango":"General",
        "nombre":"Juan Madrid",
        "mascotas":["Pichu","Nino"], 
        "cualidades":{
            "fisicas":{"fuerza":"Normal", "velocidad":"Muy Bien"},
            "mentales":["perserverancia","alegre"]
        }
    },
    "usuario2": {
        "rango":"Capitan",
        "nombre":"Ramon Medina",
        "mascotas":{"gato":"Pichu","perro":"Nino"}, 
        "cualidades":[
            ["Normal","Muy Bien"],
            {"fortaleza":"perserverancia","actitud":"alegre"}
        ]
    },
    "usuario3": [{
        "animal":"Gato",
        "nombre":"Pichu Madrid",
        "cualidades":{"atractividad":"SI"},
        "colores":["blanco","rubio"]
    }
    ,
    {
        "animal":"Perro",
        "nombre":"Nino Madrid",
        "cualidades":{"atractividad":"NO"},
        "colores":["blanco","negro","cafe"]
    }]
}
const users = {
    "user1": {
        "rango":"General",
        "nombre":"Madrid Juan",
        "mascotas":["Pichu","Nino"], 
        "cualidades":{
            "fisicas":{"fuerza":"Normal", "velocidad":"Muy Bien"},
            "mentales":["perserverancia","alegre"]
        }
    },
    "user2": {
        "rango":"Capitan",
        "nombre":"Medina Ramon",
        "mascotas":{"gato":"Pichu","perro":"Nino"}, 
        "cualidades":[
            ["Normal","Muy Bien"],
            {"fortaleza":"perserverancia","actitud":"alegre"}
        ]
    },
    "user3": [{
        "id":1,
        "animal":"Gato",
        "nombre":"Medina Pichu",
        "cualidades":{"atractividad":"SI"},
        "colores":["blanco","rubio"]
    }
    ,
    {
        "id":2,
        "animal":"Perro",
        "nombre":"Medina Nino",
        "cualidades":{"atractividad":"NO"},
        "colores":["blanco","negro","cafe"]
    }]
}
module.exports.usuarios = usuarios;
module.exports.users = users;
/* const parametro = "usuario1";
console.log(usuarios[parametro]); */