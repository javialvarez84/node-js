function saludar(nombre){

    return new Promise((resolve, reject)=>{
resolve("hola" + nombre)//la promesa se cumple
//reject ("No te saludare");   //la promesa no se cumple

    })
}

console.log(saludar("Diego"));