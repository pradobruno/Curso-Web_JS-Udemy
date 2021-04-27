function soma(a,b,c){
    a = a ||1
    b = b ||1
    c = c ||1
    return a+b+c
}

console.log(soma())
console.log(soma(3))
console.log(soma(1,2,3))
console.log(soma(0,0,0))

//estratégia 2,3,4
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a+b+c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))

//valor es15
function soma3(a=1,b=1,c=1){
    return a+b+c
}
console.log(soma3())
console.log(soma3(3))
console.log(soma3(1,2,3))
console.log(soma3(0,0,0))