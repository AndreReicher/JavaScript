// Tipo Number

//vae era utilizado para todas as variáveis 
var numero01 = 3
//let é uma atualização do var e é passivel de variação 
let numero02 = 10
//const é uma maneira de declarar uma variável que ira permanecer constante
const numero03 = 7

const soma = numero01 + numero02
const subtracao = numero02 - numero01
const multiplicacao = numero03 * numero02
const divisao = numero02 / numero01

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)

//Tipo Float -- ponto flutuante

const numero04 = 3.2
const numero05 = .5

const multiplicacao2 = numero04 * numero05

console.log(multiplicacao2)

//NaN -> Not a Number

const nome = 'Andre'
const FalsoNUMERO = "7"

const NaoEnumero = meuNome * numero05
const concatenacao = FalsoNUMERO + numero04

console.log (NaoEnumero)
console.log (FalsoNUMERO)

//Dados tipo String = Textos 

const Texto1 = "Meu nome é"
const Texto2 = "O Andre"

const concatenacao2 = Texto1 + Texto2

console.log(concatenacao2)
console.log(Texto2)

//Dados tipo Boleano
//True -->Verdadeiro
//False --> Falso

const numero06 = 7

const comparacao01 = numero06 == FalsoNUMERO
const comparacao02 = numero06 === FalsoNUMERO

// 1 sinal de (=) é para declarar
// 2 sinais de (==) comparando os valores e não o tipo do dado, (comparação fraca)
// 3 sinais de (===) comparando os tipos do dado(comparação forte)

console.log(comparacao01)
console.log(comparacao02)
