//// let respeita escopo de bloco
var numero = 1
{
    let numero =2
    console.log('Dentro = ' + numero)
}
console.log('Fora = ' + numero)