let num = parseInt(prompt('Introduce un numero: '));
let texto = 'El numero ' +  num;

if(num % 2 == 0){
    texto += ' es par,';
}
else{
    texto += ' es impar,';
}

if(num % 3 == 0){
    texto += ' es multiplo de 3';
    if(num % 5 == 0){
        texto += ' y es multiplo de 5'
    }
}
else if(num % 5 == 0){
    texto += ' es multiplo de 5';
}
else{
    texto += ' no es multiplo de 3, ni de 5';
}

alert(texto);