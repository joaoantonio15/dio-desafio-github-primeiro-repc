

const pessoa = { /* Objeto é uma estrutura que tem chave (idade) e valor (18) */
    nome: 'João Antonio S Moreira',
    idade: 18,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa['nome'] = 'teste';
