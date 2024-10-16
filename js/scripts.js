// - Crea una función llamada sayHello que reciba un nombre por parámetro y diga por consola "hola [nombre]".
function sayHello (nombre){
    console.log('hola '+nombre);
}
// - Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado.
function calculateSquareArea(lado){
    console.log(lado*lado);
}
// - Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura.
function calculateTriangleArea(base,altura){
    console.log((base*altura)/2);
}
// - Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio.
function calculateCircleArea(radio){
    console.log(Math.pow((Math.PI*radio),2));
}
// - Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32.
function celsiusToFahrenheit (celcius){
    console.log(celcius*1.8 + 32);
}
// - Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8.
function fahrenheitToCelsius(fahrenheit){
    console.log((fahrenheit-32)/1.8);
}
// - Crea una función totalPrice que reciba un precio y le sume el IVA.
function totalPrice(precio){
    console.log(precio*1.21);
}
// - Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note].
function writeMessage(name, material, size , note){
    console.log(name+'ha pedido una caja de '+material+' de tamaño '+size+'.'+note);
}