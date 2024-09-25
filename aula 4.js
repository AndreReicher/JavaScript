//Funções 

let x = 'nada'

console.log(x)

x = 'oi'
imprimeTexto(x)
console.log(x)

// Declarar uma função
//estrutura nomeDaFunção (parâmetros) { funcionalidade }
function imprimeTexto(texto){
    console.log(texto)
}

imprimeTexto('Sou o melhor')
imprimeTexto('Ta ok')
 function soma() {
    return 2+2
}
 imprimeTexto(soma())
 //comsole.log(soma())
 function somaDeNumeros(numero1, numero2){
    return numero1 + numero2
}imprimeTexto(somaDeNumeros(10, 8))

 function divisaoDeNumeros(numero1, numero2){
    return numero1 / numero2
}

imprimeTexto(divisaoDeNumeros(10, 2))
imprimeTexto(divisaoDeNumeros(2, 10))

// Ordem de parâmetros

function apresentacao(nome, idade){
    return ´Meu nome é ${nome} e tenho ${idade} anos. ´
}

imprimeTexto(apresentacao('Andre', 16))
imprimeTexto(apresentacao(16, 'Andre')) //A ordem dos parâmetros é importante


//parâmetro inicial, para que a função começe com um paramêtro pre-definido
function multiplicacao(n1, n2){
    return n1 * n2
}

imprimeTexto(multiplicacao(2, 5))