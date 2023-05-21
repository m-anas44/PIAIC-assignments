"use strict";
/*
Exercise No 17:
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the
dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop
a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end
of your program.
*/
let shrinkGuests = ['Umair', 'Anas', 'Zoahib', 'Talha', 'Mudassir'];
console.log(shrinkGuests);
console.log(`${shrinkGuests[0]}! I'm Inviting you in the dinner.`);
console.log(`${shrinkGuests[1]}! I'm Inviting you in the dinner.`);
console.log(`${shrinkGuests[2]}! I'm Inviting you in the dinner.`);
console.log(`${shrinkGuests[3]}! I'm Inviting you in the dinner.`);
console.log(`${shrinkGuests[4]}! I'm Inviting you in the dinner.`);
shrinkGuests.unshift('Sohail');
shrinkGuests.splice(3, 0, 'Faizan');
shrinkGuests.push('Qasim');
console.log(shrinkGuests);
console.log(`${shrinkGuests[0]}! I'm Inviting you in the dinner.`);
console.log(`${shrinkGuests[1]}! I'm Inviting you in the dinner.`);
console.log(`${shrinkGuests[2]}! I'm Inviting you in the dinner.`);
console.log(`${shrinkGuests[3]}! I'm Inviting you in the dinner.`);
console.log(`${shrinkGuests[4]}! I'm Inviting you in the dinner.`);
console.log(`${shrinkGuests[5]}! I'm Inviting you in the dinner.`);
console.log(`${shrinkGuests[6]}! I'm Inviting you in the dinner.`);
console.log(`${shrinkGuests[7]}! I'm Inviting you in the dinner.`);
console.log(`\n--I can invite only two guests--`);
console.log(`${shrinkGuests.pop()}! We're very sorry. We can't invite to the dinner.`);
console.log(`${shrinkGuests.pop()}! We're very sorry. We can't invite to the dinner.`);
console.log(`${shrinkGuests.pop()}! We're very sorry. We can't invite to the dinner.`);
console.log(`${shrinkGuests.pop()}! We're very sorry. We can't invite to the dinner.`);
console.log(`${shrinkGuests.pop()}! We're very sorry. We can't invite to the dinner.`);
console.log(`${shrinkGuests.pop()}! We're very sorry. We can't invite to the dinner.`);
console.log(shrinkGuests);
console.log(`${shrinkGuests[0]}! You are still invited to the dinner.`);
console.log(`${shrinkGuests[1]}! You are still invited to the dinner.`);
console.log(shrinkGuests.slice(1, 1));
