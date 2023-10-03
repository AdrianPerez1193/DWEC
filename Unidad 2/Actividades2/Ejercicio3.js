let num = parseInt(prompt('Indique su numero de hermanos: '));
let cantidad = parseFloat(prompt('Indique una cantidad: '));

if(num >= 3){
    alert('La cantidad se ha reducido un 15%, aqui tiene su cantidad: ' + (cantidad - (cantidad * 0.15)))
}
else if(num < 3 && num > 0){
    alert('La cantidad se ha reducido un 5%, aqui tiene su cantidad: ' + (cantidad - (cantidad * 0.05)))
}
else{
    alert('La cantidad total es: ' +  cantidad)
}