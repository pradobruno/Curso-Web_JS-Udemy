const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono...-- NÃO RECOMENDADO
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

// asincrono ******* USAR ESSE *******
fs.readFile(caminho,'utf-8',(err,conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//json 
const config = require('./arquivo.json')
console.log(config.db)

//leitura de pasta
fs.readdir(__dirname,(err,arquivos)=>{
    console.log('conteudo da pasta...')
    console.log(arquivos)
})