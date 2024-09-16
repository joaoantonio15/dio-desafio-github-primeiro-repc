

class Pessoa { /* Class é a definição do que deve ser o objeto */

    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);

    }
}

const joao = new Pessoa();
joao.nome = 'João Antonio S Moreira'; /* Instância é a ocorrência do objeto. */
joao.idade = 18;

const pedro = new Pessoa();
pedro.nome = 'Pedro G Carvalho';
pedro.idade = 23;

joao.descrever();
pedro.descrever();
