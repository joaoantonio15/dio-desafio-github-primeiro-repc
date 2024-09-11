

function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}


function verificarIdade(idade) {
    if(idade >= 18) {
        console.log(escrevaMeuNome('João') + ' e sou de maior');
    } else {
        console.log('Menor')
    }
}

verificarIdade(18);