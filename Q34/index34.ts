/*
Exersice No 34:
Pizzas: Think of at least three kinds of your favorite pizza. Store these 
pizza names in a array, and then use a for loop to print the name of each pizza. 
• Modify your for loop to print a sentence using the name of the pizza 
instead of printing just the name of the pizza. For each pizza you should 
have one line of output containing a simple statement like I like pepperoni 
pizza. 
• Add a line at the end of your program, outside the for loop, that states 
how much you like pizza. The output should consist of three or more lines 
about the kinds of pizza you like and then an additional sentence, such as 
I really love pizza!
*/

let fav_pizza : string[] = ['Chicken Pizza', 'Lazania Pizza', 'pepperoni pizza'];
for(let i = 0; i < fav_pizza.length; i++) {
    console.log(`I like ${fav_pizza[i]}.`);
}
console.log(`\nI like Chicken Pizza the most because of have a delightful taste.`);
console.log(`I like the Lazania Pizza very much because it have a lot of cheese and its always my special.`);
console.log(`I like pepperoni pizza also due to have a good taste.`);
console.log(`I really love Pizzas!`);