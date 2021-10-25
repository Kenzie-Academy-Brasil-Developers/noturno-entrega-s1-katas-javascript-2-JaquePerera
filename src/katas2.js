// comece a criar a sua função add na linha abaixo
function add(num1,num2){
    let soma = num1+ num2
    return soma
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo
function multiply(numb1,numb2){
    let resultado = 0
    if (numb2%2 !==0){
        resultado = numb1
        numb2 = numb2 - 1
    }
    for(let count= 1; count < numb2; count = count+2){
        resultado += add(numb1,numb1)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
//Escreva uma função chamada "power" que pega dois argumentos (x e n) e retorna o resultado de x elevado à potência n.
function power(x,n){
    let resultado = x
    for(let count=1; count<n; count++){
        resultado = multiply(resultado,x)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
//Escreva uma função chamada "factorial" que pega um único argumento e retorna o fatorial dele.
function factorial(fat1){
    let resultado = 1
    for(let count = fat1; count>1; count--){
        resultado = multiply(resultado,count)
    }
    return resultado
}
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
//Escreva uma função chamada "fibonacci" que pega um argumento n e retorna o enésimo número Fibonacci.
function fibonacci(n){
    let resultado = 0
    let seqfib = []
    seqfib.push(0,1,1)

    for(let count = 3; count<=n; count++){
        let aux1 = count-2
        let aux2 = count-1
        let pos1 = seqfib[aux1]
        let pos2 = seqfib[aux2]

        resultado = add(pos1,pos2)
        seqfib.push(resultado)

    }
    return seqfib[n]
}
// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
