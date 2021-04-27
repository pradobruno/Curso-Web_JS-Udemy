const obj = {a:1,b:2,c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))// não passa funcao somente dados

console.log(JSON.parse('{"a":1, "b":2, "c":3}'))
console.log(JSON.parse('{"a":1, "b": "texto", "c": true, "d": {"nome": "Bruno", "idade":54}}'))