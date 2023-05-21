"use strict";
/*
Exercise No 45:
Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was
stored correctly.
*/
function carFun(manufacturer, model, color, feature) {
    let carObj = {
        manufacturer: `${manufacturer}`,
        model: `${model}`,
        color: `${color}`,
        feature: `${feature}`
    };
    console.log(carObj);
}
carFun('Toyota', 2023, 'Black', '2000CC');
