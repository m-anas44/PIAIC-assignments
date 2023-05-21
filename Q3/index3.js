"use strict";
/*
Exercise No 3,
Name Cases: store person's name in variable then show out the lower case,
upper case and title case of his name.
*/
let PersonName = 'Muhammad Anas';
// For Lower Case--------------
let LowerCase = PersonName.toLowerCase();
console.log('In Lower Case: ', LowerCase);
// For Upper Case--------------
let UpperCase = PersonName.toUpperCase();
console.log('In Upper Case: ', UpperCase);
// For Title Case--------------
let forTitleCase = "";
forTitleCase += (PersonName.charAt(0).toUpperCase());
for (let i = 1; i <= PersonName.length - 1; i++) {
    forTitleCase += PersonName.charAt(i).toLowerCase();
}
console.log('In Title Case: ', forTitleCase);
