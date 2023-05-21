/*
Exercise No 36:
T-Shirt: Write a function called make_shirt() that accepts a size and the 
text of a message that should be printed on the shirt. The function should print 
a sentence summarizing the size of the shirt and the message printed on it. 
Call the function.
*/


let Message = 'This type of shirt is available in medium.';
let size_shirt = 'Medium';
function make_shirt(size: string, Message: string) {
    console.log(size);
    console.log(Message);
}

make_shirt(size_shirt, Message);