"use strict";
/*
Exercise No 37:
Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.
*/
function make_shirt_def(size_shirt1 = 'Large', message1 = 'I love typescript.') {
    console.log(size_shirt1);
    console.log(message1);
}
function make_shirt_def2(size_shirt2 = 'Medium', message2 = 'Actually, I do not love typescript.') {
    console.log(size_shirt2);
    console.log(message2);
}
make_shirt_def();
make_shirt_def2();
