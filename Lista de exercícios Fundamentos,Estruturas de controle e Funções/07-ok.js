let bhaskara = (ax2, bx, c) =>{
    let delta = (bx*bx) - 4*(ax2*c)
    if(delta < 0){
        return console.log('Delta é negativo.')
    }else{
        return console.log({
            Primeiro: (-bx+Math.sqrt(delta)) / (2*ax2),
            Segundo: (-bx-Math.sqrt(delta)) / (2*ax2)
        })
    }
}

bhaskara(2,12,-14)