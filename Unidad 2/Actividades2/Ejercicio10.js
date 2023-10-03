let num1 = parseInt(prompt('Introduce un numero: '));
let num2 = parseInt(prompt('Introduce un segundo numero: '));

while(num2 != num1){

    if(num2 > num1){
        alert('El numero es mas pequeno')
    }
    else{
        alert('El numero es mas grande')
    }

    num2 = parseInt(prompt('Introduce otra vez el numero: '));
}

alert('El numero que has introducido es correcto ');