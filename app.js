const leer = require("prompt-sync")();


/* 
//evitamos usar variables globales con el uso de objetos literales
let puntosVida = 1000;
let puntaje = 0; */



function main() {
    /* let puntosVida = 1000;
    let puntaje = 0; */
    let personaje = {
        puntosVida: 1000,
        puntaje: 0
    }
    let x = 2;

    actualizarEl(personaje, x);
    console.log(personaje.puntosVida, personaje.puntaje, x);

}



main();

function actualizarEl(objeto, num) {
    objeto.puntosVida=0;
    objeto.puntaje=300;
    num= num*4000;
}
