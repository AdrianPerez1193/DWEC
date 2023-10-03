let i;
let resultado = 0;
do{
    i = parseInt(prompt('Introduce un numero: '));
    resultado += i;
}while(i != 0)

alert('El resultado es: ' + resultado)