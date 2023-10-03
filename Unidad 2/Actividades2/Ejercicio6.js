let num1 = parseFloat(prompt('Indique un numero: '))
let num2 = parseFloat(prompt('Indique otro numero: '))
let caracter = prompt('Indique el caracter que quieres usar +, -, * o /')

if(caracter == '+' || caracter == '-' || caracter == '*' || caracter == '/'){
    if(caracter == '+'){
        alert('El resultado es: ' + (num1 + num2))
    }

    if(caracter == '-'){
        alert('El resultado es: ' + (num1 - num2))
    }

    if(caracter == '*'){
        alert('El resultado es: ' + (num1 * num2))
    }

    if(caracter == '/'){
        alert('El resultado es: ' + (num1 / num2))
    }
}
else{
    alert('Introduce un caracter valido')
}