

const numero = 4; 

const numeroDivisivelPor5 = (numero % 4) === 0; /* % significa resto da divisão; número depois do simbolo "%" é o divisor. */

if (numero === 0) {
    console.log('o número é invalido');
} else if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
}
