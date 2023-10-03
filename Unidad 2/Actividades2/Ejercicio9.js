let num = parseInt(prompt('Introduce un numero: '));
let respuesta = 1;
while(num > 1){
    respuesta *= num;
    num--;
}
alert(respuesta);