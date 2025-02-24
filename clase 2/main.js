// IF (condicional){cuerpo de condicion}
// =	Asigna un valor a una variable
// ==	Compara valores sin importar el tipo (hace conversión implícita)
// ===	Compara valores y tipos de datos (sin conversión)
// Es recomendable usar === para evitar resultados inesperados debido a conversiones implícitas de tipo.

let nombre = prompt("ingresa tu nombre por favor").trim()
let apellido = prompt("Ingresa tu apellido")

if (apellido==" " || apellido == null){

}else{
    if(nombre === "vicente" && apellido === "perez"){
        alert("Hola como vas")
    }else if(nombre == "joaquin"){
        alert("hola joaquin, como se encuentra tomas")
    }else if(nombre === "nicolas" apellido === "viloni"){
        alert("hola nicolas , disfruta tu estadia ")
    }else{
        alert("hola estoy soltero")
    }
}
