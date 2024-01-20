let numeroSecreto = 0;
let intentos = 0;
let listaNumerosAleatorios = [];
/*--Funcion utilizada para poder declarar un texto o que 
se escriba un texto en el elemento deseado dentro del html 
--Se deben esperar dos valores, en este caso elemento(es el elementode html)
y texto (el texto esperado a apaerecer en pantalla)*/
function asignarTextoElemento(elemento, texto){
        //titulo es una variable en la cual se le asigna el valor a editar
    //document se utiliza para crear un "puente" entre html y js
    //query selector se utiliza para poder interactuar con cualquier elemento del html
    //h1 hace referencia al titulo que se está utilizando en el archivo html
    let elementoHTML = document.querySelector(elemento);
    //aqui se llama a la variable para editarle lo que uno quiera
    //innerHTML es un metodo para escribir texto en la variable
    elementoHTML.innerHTML = texto;
    return;
}
//funcion creada para realizar un evento en el html mediante js
function verificarIntento(){
    //getElementById es obtener un elemento de acuerdo a su ID
    //.value es utilizado para obtener el valor del objeto y no el objeto, en este caso, el numero que el usuario escribe.
    let numerosDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //triple igual es para verificar que los datos sean del mismo tipo
    //console.log(numeroSecreto === numerosDeUsuario);
    console.log(numeroSecreto);
    if (numerosDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1 ? 'intento' : 'intentos')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numerosDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero es menor mi pana');
        } else {
            asignarTextoElemento('p','El numero es mayor mi pana');
        }
        //esta funcion es llamada al no atinarle al numero secreto
        limpiarCaja();
        intentos+=1;
    }
    return;
}

//funcion que sirve para limpiar la caja del numero
function limpiarCaja(){
    //se identifica el id con query selector al utilizar el #
    let valorCaja = document.querySelector('#valorUsuario');
    //se utiliza el value para darle el valor vacio a la caja al poner las comillas vacias
    valorCaja.value="";
    //para simplificiar tambien se puede utilizar la siguiente linea de comando
    //document.querySelector(#valorUsuario).value = "";
}

function generarNumeroSecreto() {
    //se establece una variable para darle el numero random
    let numeroAleatorio = Math.floor(Math.random()*10)+1;
    //verificamos que aparezca el numero aleatorio
    console.log(numeroAleatorio);
    //verificamos que aparezca la lista incrementada 
    console.log(listaNumerosAleatorios);
    //condicional que si listaNumerosAleatorios incluye el numero aleatorio es verdad retorne la funcion
    if (listaNumerosAleatorios.includes(numeroAleatorio)){
        return generarNumeroSecreto();
        //caso contrario se agregara el numero aleatorio a la lista de la variable generada en let numeroAleatorio
    } else {
        listaNumerosAleatorios.push(numeroAleatorio);
        return numeroAleatorio;
    }
    
}

function condicionesIniciales (){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", "Escribe un numero del 1 al 10");    
    //se debe crear un nuevo numero
    numeroSecreto = generarNumeroSecreto();
    //se debe reiniciar los intentos
    intentos = 1;
}

function nuevoJuego(){
    //se debe limpiar la caja
    limpiarCaja();
    //indiciar mensaje de poner un numero de 1 a 10
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    //se está utilizando setAttribute para asignarle cierto evento y si es t o f
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();