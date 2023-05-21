/*
Exercise No 32:
Checking Usernames: Do the following to create a program that simulates how websites ensure that 
everyone has a unique username. 
• Make a list of five or more usernames called current_users. 
• Make another list of five usernames called new_users. Make sure one or two of the new usernames 
are also in the current_users list. 
• Loop through the new_users list to see if each new username has already been used. If it has, print a 
message that the person will need to enter a 
new username. If a username has not been used, print a message saying that the username is available. 
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

let current_users = ['admin', 'will', 'john', 'harry', 'eleven','zohaib'];
let new_users = ['sarah', 'WILL', 'Jordan', 'eleven', 'jack'];
let new_users_lower = new_users.map(word => word.toLowerCase());
let flag = 0;
let found = 0;
for(let i = 0; i < current_users.length; i++) {
    for(let j = 0; j < new_users_lower.length; j++) {
        if(new_users_lower[j] == current_users[i]) {
            console.log(`UserName "${new_users_lower[j]}" is not eligible. RE-ENTER username.`);
            flag = 1;
            found = 1;
        }
        else {
            flag = 2;
        }
    }
}
if(flag == 2 && found != 1) {
    console.log(`Username is available.`);
}

