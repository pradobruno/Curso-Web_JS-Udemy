// cadeia de responsabilidades - middleware pattern
const passo1 = (ctx, next) =>{
    ctx.valor1 = 'Midd1'
    next()
}

const passo2 = (ctx, next)=>{
    ctx.valor2 = 'Midd2'
    next()
}

const passo3 = (ctx) => ctx.valor3 = 'Midd3'

const execMiddles =(ctx, ...middlewares) =>{
    const execPasso = indice =>{
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso(indice+1))
    }
    execPasso(0)
}

const ctx = {}
execMiddles(ctx, passo1, passo2, passo3)
console.log(ctx)
