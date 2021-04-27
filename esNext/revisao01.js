// let const
{
    var a = 1
    let b = 2
    console.log(b)
}

console.log(a)

const c = 3
//c = a //erro
console.log(c)


// template string 
let produto ='ipad'
console.log(`${produto} é caro!`)

produto = 'Iphone'
console.log(`${produto} é caro!`)

// destructuring
let escola = 'Cod3r'
 const [l,e, ...tras] = escola
 console.log(l,e,tras)

 let nums = [1,2,3,4,5,6]
 const [aa,bb,cc,dd,ee,ff] = nums
 console.log(aa,bb,cc,dd,ee,ff)

 let obj = {nome: 'ana', idade: 34, firmeza: true}
 const {firmeza: eh, idade: i, nome: vulgo} = obj
 console.log(vulgo, eh, i)