let calculaBissexto = (ano) =>{
    if(ano <= 0){
        return console.log(false)
    }else if((ano % 400 == 0) || (ano % 4 == 0 && ano % 100 != 0)){
        return console.log(true)
    }else{
        return console.log(false)
    }
}
   


calculaBissexto(0)
calculaBissexto(4)
calculaBissexto(100)
calculaBissexto(400)
calculaBissexto(800)
calculaBissexto(2020)
calculaBissexto(2021)