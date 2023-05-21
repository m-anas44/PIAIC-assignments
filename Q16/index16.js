"use strict";
/*
Exercise No 16:
More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a
bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
let moreGuests = ['Umair', 'Anas', 'Zoahib', 'Talha', 'Mudassir'];
console.log(moreGuests);
console.log(`${moreGuests[0]}! I'm Inviting you in the dinner.`);
console.log(`${moreGuests[1]}! I'm Inviting you in the dinner.`);
console.log(`${moreGuests[2]}! I'm Inviting you in the dinner.`);
console.log(`${moreGuests[3]}! I'm Inviting you in the dinner.`);
console.log(`${moreGuests[4]}! I'm Inviting you in the dinner.`);
moreGuests.unshift('Sohail');
moreGuests.splice(3, 0, 'Faizan');
moreGuests.push('Qasim');
console.log(moreGuests);
console.log(`${moreGuests[0]}! I'm Inviting you in the dinner.`);
console.log(`${moreGuests[1]}! I'm Inviting you in the dinner.`);
console.log(`${moreGuests[2]}! I'm Inviting you in the dinner.`);
console.log(`${moreGuests[3]}! I'm Inviting you in the dinner.`);
console.log(`${moreGuests[4]}! I'm Inviting you in the dinner.`);
console.log(`${moreGuests[5]}! I'm Inviting you in the dinner.`);
console.log(`${moreGuests[6]}! I'm Inviting you in the dinner.`);
console.log(`${moreGuests[7]}! I'm Inviting you in the dinner.`);
