var array = [];
continuar = 1;
nombre = '';
cantidad = 0;
cotizacion = 0;
contador = 0;
valor = 0;


window.alert('Proceso para cargar toda tu wallet ');

while (continuar == 1) {

    nombre = window.prompt('Ingrese nombre de Cripto : ');

    cantidad = window.prompt('Ingrese cantidad de esa cripto : ');

    cotizacion = window.prompt('Ingrese cotizacion de esa cripto : ');

    const a = new Object();

    a.nombre = nombre;
    a.cantidad = cantidad;
    a.cotizacion = cotizacion;

    array.unshift(a);

    continuar = window.prompt('Ingrese 1 Si desea agregar otra cripto : ');

}

window.alert('Estas son tus cripto monedas cargadas ')

while (contador != array.length) {

    window.alert(' Nombre de la cripto moneda : ' + array[contador].nombre + '\n Cotizacion de la criptomoneda : ' + array[contador].cotizacion + '\n Cantidad de la criptomoneda : ' + array[contador].cantidad);
    valor = valor + (Number(array[contador].cotizacion) * Number(array[contador].cantidad))

    contador++;
}

window.alert('SU INVERSION FINAL ES ' + valor)
