"use strict";
/*
Exercise No 41:
Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let magician_names = ['Hector', 'Strange', 'Judi Jordan'];
function show_magicians(arrMagician) {
    for (let i = 0; i < arrMagician.length; i++) {
        console.log(arrMagician[i]);
    }
}
show_magicians(magician_names);
