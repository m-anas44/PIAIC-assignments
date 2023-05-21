/*
Exercise No 43:
Unchanged Magicians: Start with your work from Exercise 40. Call the 
function make_great() with a copy of the array of magicians’ names. Because the 
original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original 
names and one array with the Great added to each magician’s name.
*/

let magicianNames : string[] = ['Hector', 'Strange', 'Judi Jordan']; 
function make_great(arrMagician: string[]) {
    console.log(`I have an array of the original names.`);
    for(let i = 0; i < arrMagician.length; i++) {
        console.log(arrMagician[i]);
    }
}
//New array added...
let newArr : string[] = ['Hector', 'Strange', 'Judi Jordan'];
function show_magicians(arrMagician: string[]) {
    make_great(magicianNames);
    console.log(`We have one array with the Great added to each magician's name`)
    for(let i = 0; i < arrMagician.length; i++) {
        console.log(`Great ${arrMagician[i]}`);
    }
}
show_magicians(magicianNames);