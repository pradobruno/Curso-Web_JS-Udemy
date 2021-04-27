let diaUtil = (dia) =>{
    switch(dia){
        case 2: case 3: case 4: case 5: case 6:
            return console.log('Dia útil.')
            break
        case 7:
            return console.log('Final de semana.')
            break
        case 1:
            return console.log('Final de semana.')
            break
        default:
            return console.log('Dia inválido.')
    }
}

diaUtil(6)