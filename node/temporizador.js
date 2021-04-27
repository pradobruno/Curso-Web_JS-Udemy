const schedule = require('node-schedule')

//paramentro = separador é o* - segundo - minuto - hora - dia - mes - dia da semana
// 0 domingo 1 segunda ......
const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 1', function(){
    console.log('Executando tarefa 1', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa1')
}, 20000)

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 15
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log('Executando Tarefa2', new Date().getSeconds())
})