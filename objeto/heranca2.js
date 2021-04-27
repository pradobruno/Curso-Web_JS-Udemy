// cadeia de prototipos
Object.prototype.atri0 = '0'
const avo = {atri1 : 'a'}
const pai = {__proto__:avo, atri2: 'b', atri3 : '10'}
// consulta por escopo filho 1, pais 2 e por fim avo
const filho = {__proto__:pai, atri3 : 'c'}
console.log(filho.atri0)
console.log(filho.atri1)
console.log(filho.atri2)
console.log(filho.atri3)

//-------------------

const carro = {
    velAtual: 0,
    velMax:200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta 
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari ={
    modelo:'f43',
    velMax: 324
}

const volvo ={
    modelo: 'v48',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

// definido relação de herança 
Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

volvo.acelerarMais(200)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())