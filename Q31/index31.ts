/*
Exercise No 31:
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty. 
• If the list is empty, print the message We need to find some users! 
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

let usernames31 : string[] = ['Admin', 'Eric', 'John', 'Jordan', 'Eleven'];
if(usernames31.length != 0) {
    console.log(`It's sure that list is non-empty`);
}
usernames31.splice(0, usernames31.length);
console.log(usernames31);
if(usernames31.length == 0) {
    console.log(`We need to find some users.`);
}