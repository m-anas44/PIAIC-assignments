/*
Exercise No 18:
Seeing the World: Think of at least five places in the world you’d like to visit. 
• Store the locations in a array. Make sure the array is not in alphabetical order. 
• Print your array in its original order. 
• Print your array in alphabetical order without modifying the actual list. 
• Show that your array is still in its original order by printing it. 
• Print your array in reverse alphabetical order without changing the order of the original list. 
• Show that your array is still in its original order by printing it again. 
• Reverse the order of your list. Print the array to show that its 
order has changed. 
• Reverse the order of your list again. Print the list to show it’s back to its original order. 
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
changed. 
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
order has changed.
*/

let arr : string[] = ['Saudia Arabia', 'China', 'Norway', 'Japan', 'Afganistan'];
console.log(arr);
let alphaOrder = [...arr].sort();
console.log(`In Alphabetical Order:--\n`, alphaOrder);
console.log(`Array is still in its original form:--\n`, arr);
console.log(`In Reverse Alphabetical Order:--\n`, [...[...arr].sort()].reverse());
console.log(`Array is still in its original form:--\n`, arr);
console.log(`Now its order is changed:--\n`, arr.reverse());
console.log(`Now its order is back to its original form:--\n`, arr.reverse());
console.log(`Now, its sorted in alphabetical form:--\n`, arr.sort());
console.log(`Now, array in reverse alphabetical order:--\n`, arr.reverse());