function checarAnoBissexto(ano) {
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentos = ano % 400 == 0
    return console.log((divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos)
    }
    
  /*   // checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias
function checarAnoBissexto(ano) {
    return new Date(ano, 1, 29).getDate() === 29;
    } */
    
checarAnoBissexto(2020)
checarAnoBissexto(2100)