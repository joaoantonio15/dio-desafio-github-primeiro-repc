
/*let = Variável que pode mudar.
 const = Constante não muda. */ 

const precoCombustivel = 5.79;
const kmPorLitros = 1;
const distanciaEmKm = 100; 

const listrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = listrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2)); /* toFixed arredonda números; (2) número de casas depois da vírgula. */


