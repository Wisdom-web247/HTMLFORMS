/*

1. If you want to check with console, code console.log() outside of the constant scope 
2. Remember to use brackets when multiplying or dividing on the same line, B.o.d.m.a.s still applies 
3. Don't forget to use this sign => after the const scope

*/

const convertToKilogram = (pounds) => {

    return pounds * 0.453592
}
console.log(`600 pounds is equivalent to: ${convertToKilogram(600)} KG`)


const convertToCentimeters = (inches) => {

    return inches * 2.54
}
console.log(`10inches is equivalent to: ${convertToCentimeters(10)} centimeters`)

const convertToCelsius = (fahrenheit) => {

    return (fahrenheit - 32) * 5/9
}
console.log(`150 degrees fahrenheit is equivalent to: ${convertToCelsius(150)} celsius`)

const convertToMeters = (feet) => {

    return feet * 0.3048 
}
console.log(`6 feet is equivalent to: ${convertToMeters(6)} meters`)