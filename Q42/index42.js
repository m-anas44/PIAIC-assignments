"use strict";
/*
Exercise No 42:
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let GreatMagician_names = ['Hector', 'Strange', 'Judi Jordan'];
function make_great(arrMagician) {
    for (let i = 0; i < arrMagician.length; i++) {
        console.log(`Great ${arrMagician[i]}`);
    }
}
make_great(GreatMagician_names);
