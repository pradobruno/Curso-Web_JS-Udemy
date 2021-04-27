//brake - switch - for - while
//continue - for - while - pula a repetição atual
// evitar usar essas alternativas de desvio de fluxo
// procurar alternativas mais 'claras'

const nums = [1,2,3,4,5,6,7,8,9,10]

for(let x in nums){
    if(x == 5){
        break
        // break nao age em if - ele age no for
        // ele força a saida da estrutura parando a repetição
    }
    console.log(`${x} = ${nums[x]}`)
}

for(let y in nums){
    if(y == 5){
        continue
        //continue nao age em if - ele age no for
        // mas ele pula a repetição atual e vai para
        // a próxima sem sair da estrutura
    }
    console.log(`${y} = ${nums[y]}`)
}


externo: for(a in nums){
    for(b in nums){
        if(a==2 && b==3){
            break externo
        }
        console.log(`Par = ${a} , ${b}`)
    }
}
console.log('fim')