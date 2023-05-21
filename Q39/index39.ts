/*
Exercise No 39:
City Names: Write a function called city_country() that takes in the name 
of a city and its country. The function should return a string formatted like this: 
"Lahore, Pakistan" 
Call your function with at least three city-country pairs, and print the value 
that’s returned.
*/

function city_country(nameCity: string, nameCountry: string) {
    return `'${nameCity}, ${nameCountry}'`;
}
let city = city_country(`Makka`, `Saudia Arabia`);
console.log(city);
city = city_country(`Lahore`, `Pakistan`);
console.log(city);
city = city_country(`Oval`, `England`);
console.log(city);
