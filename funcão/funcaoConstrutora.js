function Carro(velocidadeMaxima = 200, delta =5){
    //atributo privado
    let velocideAtual = 0
    
    //metodopublico
    this.acelerar = function(){
        if(velocideAtual + delta <= velocidadeMaxima){
            velocideAtual +=delta
        }else{
            velocideAtual = velocidadeMaxima
        }
    }
    
    //metodopublico
    this.getVelocidadeAtual = function(){
        return velocideAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())