function Aula(nome,videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até logo', 456)
console.log(aula1,aula2)

// simulando NEW
function novo(f, ...params){
    const obj = {}
    obj.___proto___ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula,'É nois ou não é?',666)
const aula4 = novo(Aula,'Faaalouuuu',6969)

console.log(aula3,aula4)