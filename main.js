function login(){
    alert("Bienvenido al sistema")
    let intentos = 1
    let identificar = true
    do{
        let usuario = prompt("Ingresa tu usuario")
        if(usuario === null){
            break
        }
        if(usuario ==="elias" && intentos <=3){
            alert("Bienvenido Elias")
            identificar = false
        }else{
            alert("no reconozco el usuario")
            intentos++
            if(intentos > 3 ){
                alert("superaste los 3 intentos disponibles")
                break
            }
        }
    }while(identificar)
}

login()