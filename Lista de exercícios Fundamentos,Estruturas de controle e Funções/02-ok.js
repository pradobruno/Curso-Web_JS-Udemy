let tipoTriangulo = (a,b,c) =>{
    if(a === b && a === c && b === c){
        return 'Triangulo Equilátero'
    }else if(a !== b && b === c || a !== c && b === c || b !== a && a === c || c !== a && a === b ){
        return 'Triangulo Isósceles'
    }else if(a !== b && a !== c && b !== c){
        return 'Triangulo Escaleno'
    }
}

console.log(tipoTriangulo(1,2,3))