const retornaNums = function(arrayEntrada){
    const pNums = e => typeof e === "number"
    return console.log(arrayEntrada.filter(pNums))
}

retornaNums(["Javascript", 1, 5.6, "3", "Web", 20])