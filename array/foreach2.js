// criar prototipo dentro de array
Array.prototype.forEach2 = function(callbalck){
    for(let i = 0 ; i< this.length ; i++){
        callbalck(this[i],i,this)
    }
}

const aprovados = ['Agata','aldo','daniel','Raquel']

aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1} ${nome}`)
})