
let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMinimo = 1;
let numeroMaximo = 5;

condicionesIniciales();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); // Objeto
    elementoHTML.innerHTML = texto;
    return;
}

function realizarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${numeroIntentos} ${numeroIntentos==1? 'intento' : 'intentos'}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    }
    else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        numeroIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroAleatorio(limiteInferior, limiteSuperior) {
    let numeroGenerado =  Math.floor(Math.random()*limiteSuperior)+limiteInferior;
    return numeroGenerado;
    // Si ya sorteamos todos los números -> salimos del juego
    /*
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroAleatorio();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
     */
    

}

function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del número secreto!");
    asignarTextoElemento('p', "Ingresa un número del 1 al 5");
    numeroSecreto = generarNumeroAleatorio(numeroMinimo,numeroMaximo);
    numeroIntentos = 1;
}

function reiniciarJuego(){
    // Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de inicio de intervalo de números
    //generar número aleatorio
    //deshabilitar el boton de nuevo juego
    //Inicializar el numero de intentos
    condicionesIniciales();   
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

