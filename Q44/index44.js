"use strict";
/*
Exercise No 44:
Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.
*/
function sandFun(sandwich) {
    console.log(`Using these ingredients\n`, sandwich, `You can make sandwich.`);
}
console.log(`\n\n\t------SANDWICHES------\n\n`);
sandFun(['bread', 'chicken', 'salad', 'Mayo']);
sandFun(['bread', 'chicken', 'egg']);
sandFun(['bread', `jam`]);
