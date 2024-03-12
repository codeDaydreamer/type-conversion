//the window alert accepts tet so we have to convert some inputs such as age and points.

let age = window.prompt(`Input your age`);
age = Number(age);
newAge = age += 1;

document.getElementById(`p1`).textContent=`One year from now you will be ${newAge} years old `
console.log(typeof age);
//converting a string to a number will give a NaN error meaning not a number
//converting a string to a boolean will give a typeof true due to the prescenve of some values