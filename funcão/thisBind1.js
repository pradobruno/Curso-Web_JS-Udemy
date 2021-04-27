const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()
// conflito de paradigma entre oo e funcional


// exemplo de solução
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()