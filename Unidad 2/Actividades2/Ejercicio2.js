let edad = parseInt(prompt('Introduce tu edad: '));
let ciudad = prompt('Introduce la cuidad donde vives: ');

if(edad > 18 && edad < 35 && ciudad == 'Alicante'){

    alert('Puedes acceder al carnet de emprendedores');

}
else{

    alert('No puedes acceder al carnet de emprendedores');
    
}