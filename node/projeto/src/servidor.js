const porta = 3003

const { response } = require('express')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))
//qq requisição usado express ele vai fazer o parse do url code

app.get('/produtos', (req, res, next)=>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next)=>{
    res.send(bancoDeDados.getProduto(req.params.id)) // send converte automatico para JSON
})

app.post('/produtos', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        name: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        name: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next)=>{
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () =>{
    console.log(`Servidor está executando na porta ${porta}`)
})