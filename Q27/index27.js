"use strict";
/*
Exercise No 27:
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color
alien.
*/
let alien_color1 = 'green';
if (alien_color1 === 'green') {
    console.log(`Player Just Earned 5 Points.`);
}
alien_color1 = 'yellow';
if (alien_color1 === 'yellow') {
    console.log(`Player Earned 10 Points.`);
}
alien_color1 = 'red';
if (alien_color1 === 'red') {
    console.log(`Player Earned 15 Points.`);
}
