/* Crear un módulo matemática /src/modules/matematica.js que tenga 4 funciones (dos de ellas arrow functions) y una constante (PI). Exportarlas y utilizarlas en el programa principal.*/
const multiplicar= require("./modules/matematica");
const sumar= require("./modules/matematica");
const restar= require("./modules/matematica");
const dividir= require("./modules/matematica");

console.log(multiplicar.multiplicar(8,2));
console.log(sumar.sumar(8,2));
console.log(restar.restar(8,2));
console.log(dividir.dividir(8,2));



