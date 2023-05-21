"use strict";
/*
Exercise No 15:
Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.
*/
let changeGuests = ['Umair', 'Anas', 'Zoahib', 'Talha', 'Mudassir'];
console.log(changeGuests);
console.log(`${changeGuests[0]}! I'm Inviting you in the dinner.`);
console.log(`${changeGuests[1]}! I'm Inviting you in the dinner.`);
console.log(`${changeGuests[2]}! I'm Inviting you in the dinner.`);
console.log(`${changeGuests[3]}! I'm Inviting you in the dinner.`);
console.log(`${changeGuests[4]}! I'm Inviting you in the dinner.`);
console.log();
console.log(`Sorry! ${changeGuests[4]} can't make the dinner.`);
changeGuests[4] = 'Hadi';
console.log(`${changeGuests[4]}!\nYou're inviting in the dinner.\n--So,\n`);
console.log(changeGuests);
console.log(`${changeGuests[0]}! I'm Inviting you in the dinner.`);
console.log(`${changeGuests[1]}! I'm Inviting you in the dinner.`);
console.log(`${changeGuests[2]}! I'm Inviting you in the dinner.`);
console.log(`${changeGuests[3]}! I'm Inviting you in the dinner.`);
console.log(`${changeGuests[4]}! I'm Inviting you in the dinner.`);
