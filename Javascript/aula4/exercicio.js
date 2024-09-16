/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilomêtro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;

    }

    calcularGastoDeViagem(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}




const uno = new Carro('Fiat', 'prata', 1 / 12);

uno.calcularGastoDeViagem(70, 5);
console.log(uno.calcularGastoDeViagem(70, 5));

const palio = new Carro('Fiat', 'Preto', 1 / 10);

palio.calcularGastoDeViagem(70, 5);
console.log(palio.calcularGastoDeViagem(70, 5));