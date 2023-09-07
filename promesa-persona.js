const personas = [
    {
        id: 1,
    nombre: "Diego",
    edad: 25,
    ciudad: "Bogota",
},
{ 
    id: 2,
nombre: "Oscar",
    edad: 32,
    ciudad: "Medellin",
},
{
    id: 3,
    nombre: "Miguel",
    edad: 27,
    ciudad: "Cali",
}
] ; 


function obtenerPersonasPorId(id) {

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const personaEncontrada = personas.find((elemento) =>(elemento.id===id))
            resolve (personaEncontrada);
        })
    })
}

obtenerPersonasPorId(3).then((identidad)=> console.log(identidad))
