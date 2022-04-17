
/*
let NombreDeUsuario = prompt ("Ingresar nombre de usuario")

switch (NombreDeUsuario){
  case "andres" :
    alert("ingresaste andres")
    
    let contraseña = prompt ("ingresa su contraseña")
    while (contraseña != "andresito")
    alert ("contraseña incorrecta")   
    case
*/

/*
let valor1 = parseInt(prompt("Ingrese un número")) ;
let valor2 = parseInt(prompt("Ingrese un número")) ;
let operacion = prompt("ingrese una operacion de las siguiente: \nSumar\nRestar\nMultiplicar\nDividir") ;
let resultado = " " ;

if(operacion == "Sumar") { ;
  resultado = valor1 + valor2 ;
  alert ("La suma es " + resultado) ;
 
}else if(operacion == "Restar") { ;
  resultado = valor1 - valor2 ; 
  alert ("La resta es " + resultado) ;

} else if(operacion == "Multiplicar") { ;
  resultado = valor1 * valor2 ;
  alert ("La multiplicación es " + resultado) ;

} else if(operacion == "Dividir") { ;
  resultado = valor1 / valor2 ;
  alert ("La divsion es " + resultado ) ;
} 
else {
  alert ("no entendi la operación") 
}
*/
/*
let ingreso = prompt ("ingresar que quiere hacer")
if(ingreso == "login"){
    for (let i = 0; i < 3; i++){
        let NombreDeUsuraio = prompt ("ingresar nombre de usuario")
        while(NombreDeUsuraio != "Russo"){
            alert ("nombre de usuario incorrecto")
            NombreDeUsuraio = prompt("ingresar nombre de cuenta")
          }  
    }alert ("intentelo de nuevo mas tarde")
    
    let contraseña = prompt("ingresar contraseña")
          while (contraseña != "2222") {
            alert ("contraseña incorrecta")
            contraseña = prompt("ingresar contraseña")
          }
          alert ("Bienvenido")
}


let ingreso = prompt ("ingresar que quiere hacer")
if(ingreso == "login"){
    let NombreDeUsuraio = prompt ("ingresar nombre de usuario")
    while(NombreDeUsuraio = " Russo "){
        alert ("nombre de usuario incorrecto")
        NombreDeUsuraio = prompt("ingresar nombre de cuenta")
      }  
      let contraseña = prompt("ingresar contraseña")
          while (contraseña = " 2222 ") {
            alert ("contraseña incorrecta")
            contraseña = prompt("ingresar contraseña")
          }
          alert ("Bienvenido")
}
*/

let operacion = prompt ("Ingresar que quiere hacer") ;

if(operacion = "Login"){ 
    let NombreDeUsuario = prompt ("Ingresar nombre de usuario") ;
    while(NombreDeUsuario != "Russo"){ 
        alert("Nombre de usuario incorrecto") ;
        NombreDeUsuario = prompt ("Ingresar nombre de usuario") ;
    }while (NombreDeUsuario = "Russo"){ 
        alert("Nombre de usuario correcto") ;
        break ;
    } ;
} ;
let contraseña = prompt ("Ingresar contraseña") ;
while (contraseña != "123456"){ 
    alert("Contraseña incorrecta")  ;
    contraseña = prompt("Ingresar contraseña") ;
}while (contraseña = "123456"){ 
    alert("Contraseña correcta") ;
    break ;
} ;
alert("Bienvenido") ;
let opciones = prompt ("Elija una aplicacion \nImagenes\nBuscador\nRed social\nCoderhouse") ;
switch (opciones){ 
    case "Imagenes" :
        alert("Ingresaste a imagenes") ;
        break ;
    case "Buscador":
        alert("Ingresaste al buscador") ;
        break ;
    case "Red social":
      alert("Ingresaste a tu red social") ;
        break ; 
    case "Coderhouse" :
      alert("Ingresaste a Coderhouse") ; 
        break ;
} ;


