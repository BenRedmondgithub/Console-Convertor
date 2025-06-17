// The forecast today
const kelvin = 293;

// Celsius is Kelvin minus 273
const celsius = kelvin - 273;

//adding newton 
let newton = celsius * (33/100)

// Fahrenheit formula
let fahrenheit = celsius * (9 / 5) + 32;

// Round down the Fahrenheit value
fahrenheit = Math.floor(fahrenheit);

newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`That's about ${newton} degrees Newton, if you're into that.`);