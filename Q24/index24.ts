/*
Exercise No 24:
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to 
try more comparisons, write more tests. Have at least one True and one False result for each of the 
following: 
• Tests for equality and inequality with strings 
• Tests using the lower case function 
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
and less than or equal to 
• Tests using "and" and "or" operators 
• Test whether an item is in a array 
• Test whether an item is not in a array
*/

//for equality and inequality of strings...
let forString1 : string = 'Anas';
if(forString1 === 'Anas') {
    console.log(`${forString1}`, true) //true statement
}
let forString2 = 'Anas';
if(forString2 !== 'Anas') {
    console.log(`${forString2}`, true); //true statement
}
else {
    console.log(`${forString2}`, false); //false statement
}
//for lower case...
let lowerFun = 'PAKISTAN';
let lowerCase = lowerFun.toLowerCase();
if(lowerCase == 'pakistan') {
    console.log(`It's a lower case function.`);
}
else {
    console.log(`It's in upper case.`);
}
//for numbers...
let comparisonNum : number = 10;
if(comparisonNum === 10) {
    console.log(`${comparisonNum} is equal to 10`);
}
if(comparisonNum !== 10){
    console.log(`${comparisonNum} is not equal to 10`);
}
else {
    console.log(`The ${comparisonNum} should not be equals to 10, but its equals to 10`);
}
if(comparisonNum > 10) {
    console.log(`${comparisonNum} is greater than 10.`);
}
else {
    console.log(`${comparisonNum} is not greater than 10`);
}
if(comparisonNum < 10) {
    console.log(`${comparisonNum} is less than 10.`);
}
else {
    console.log(`${comparisonNum} is not less than 10`);
}
if(comparisonNum <= 10) {
    console.log(`${comparisonNum} is less or equals to 10.`);
}
if(comparisonNum >= 10) {
    console.log(`${comparisonNum} is greater or equals to 10.`);
}
//for 'and' and 'or' operator...
if(comparisonNum > 10 || comparisonNum < 10) {
    console.log(`${comparisonNum} is greater or less than 10.`);
}
else {
    console.log(`${comparisonNum} is not greater or less than 10`);
}
if(comparisonNum == 10 && comparisonNum === 10) {
    console.log(`${comparisonNum} is equals to 10.`);
}
//for testing item in an array...
let arrayTest = [10, 20, 30, 'meal', 40];
let test=0;
for(let i = 0; i < arrayTest.length; i++) {
    if(arrayTest[i] == 'meal') {
        test = 1;
        console.log(`item found`);
    }
}
if(test == 0) {
    console.log(`item not found`);
}
