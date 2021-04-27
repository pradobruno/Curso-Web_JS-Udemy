const escola = [{
    nome: 'Turma M1',
    alunos:[{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Ana',
        nota:9.3
    }] 
}, {
    nomes: 'Turma M2',
    alunos:[{
        nome: 'Rebeca',
        nota: 8.9
    },{
        nome: 'Roberto',
        nota:7.3
    }]
}]

const getNotadoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotadoAluno)

console.log(escola.map(getNotasDaTurma))

Array.prototype.flatmap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas1 = escola.flatmap(getNotasDaTurma)
console.log(notas1)
