// Alguns erros

let numero = 12 // O javaScript é sensivel ao capslock
//console.log(numero) // Erro de declaração, variável não declarada

//console.log(numero // Erro de sintaxe, faltas de parenteses

// Tratamento de erros
//console.error('A lista não esta excutando a média') // Declara um erro para o usuário;


const idadeMinima = 18
let idadeCliente = 17

if(idadeCliente >= idadeMinima){
    console.log('Cerveja')
} else {
    console.log('Suco')
}

//Valor ternário
idadeCliente = 20

//modo ternário, ______ <= _______ ? -------:--------
//modo ternário, ______ == _______ ? -------:--------
console.log(idadeCliente >= idadeCliente ?  'Cerveja' : 'Suco')
                    // => uma função arrow, completamente diferente de maior igual

//utilizar com cuidado

const nome = "André"
const idade = 100
const cidadeNascimento = "Foz do Iguaçu"

const apresentacao = "Meu nome e " + nome + " tenho " + idade + " anos e nasci em " + cidadeNascimento

console.log(apresentacao)

//Template string

