let calcSwitch = (num1,operacao,num2) =>{
    switch(operacao){
        case '+':
            return console.log(`A soma de ${num1} + ${num2} é ${num1 + num2}.`)
            break
        case '-':
            return console.log(`A subtração de ${num1} - ${num2} é ${num1 - num2}.`)
            break
        case '*':
            return console.log(`A multiplicação de ${num1} * ${num2} é ${num1 * num2}.`)
            break
        case '/':
            return console.log(`A divisão de ${num1} / ${num2} é ${num1 / num2}.`)
            break
        case '%':
            return console.log(`A resto de ${num1} % ${num2} é ${num1 % num2}.`)
            break
        default:
            return console.log('Operação não é valida.')
    }
}

calcSwitch(3,'+',2)
calcSwitch(3,'-',2)
calcSwitch(3,'*',2)
calcSwitch(3,'/',2)
calcSwitch(3,'%',2)
calcSwitch(3,'.',2)