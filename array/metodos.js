const pilotos = ['Vetel','Alonso','Raikonen','Massa']
pilotos.pop()// remove o ultimo
console.log(pilotos)

pilotos.push('Verstappen')// adiciona ao final
console.log(pilotos)

pilotos.shift()// remove o primeiro
console.log(pilotos)

pilotos.unshift('hamilton')// adiciona na frente
console.log(pilotos)

////////////////////////////////////////////////////
///////////// - AÇÕES COM SPLICE - /////////////////
////////////////////////////////////////////////////
pilotos.splice(2,0,'Bottas','Massa')// ADD
console.log(pilotos)

pilotos.splice(3,1)// remover
console.log(pilotos)
////////////////////////////////////////////////////
////////////////////////////////////////////////////

const algunsPilotos = pilotos.slice(2)// a partir do 2 elemento
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4)//do 1 até o 3
console.log(algunsPilotos2)

