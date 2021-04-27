console.log(typeof Array, typeof new Array, typeof[])

let aprovados = new Array('Bia','Cariacica',"SemAlma")
console.log(aprovados)

aprovados = ['Bruno',"Deivid",'Sato']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Josinha'
aprovados.push('capaz?')
console.log(aprovados)

aprovados[9] = '9'
console.log(aprovados.length)
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bruno',"Deivid",'Sato']
aprovados.splice(1,0,'elemento1','elemento2')
console.log(aprovados)
aprovados.splice(1,2)
console.log(aprovados)
