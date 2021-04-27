function Pessoa(nome){
    this.nome = nome// aqui
    this.falar = function(){
        return console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('Bruno')
p1.falar()
console.log(p1.nome)//aqui
