multiplicar = () => {
    let var1=4;
    let var2=3;
    return var1 * var2;
  };
  console.log(`El resultado de la multiplicación es: ${multiplicar()}`)
 
  sumar = () => {
    let var1 =10;
    let var2 =15;
    return var1 + var2;
  };

  console.log(`El resultado de la suma es: ${sumar()}`)


  function dividir(){
    let var1=4; 
    let var2=2;
    let resultado=var1/var2;
    return resultado;
};
console.log(`El resultado de la división es: ${dividir()}`)

function promedio(){
let valores=[20,10,15];
let sum = valores.reduce((previous, current) => current += previous);
let avg = sum / valores.length;
return avg;
};
console.log(`El resultado del promedio es: ${promedio()}`);

exports.sumar=sumar;
exports.multiplicar=multiplicar;
exports.dividir=dividir;
exports.promedio=promedio;