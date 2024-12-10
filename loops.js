// for in loop
// const person ={
//     name :"rohit",
//     age :23,
//     city :"bhopal",
// };
// text = "";
// for(let x in person){
//     text +=person[x]+"<br>";
// }



// const numbers=[23,34,2,4,56,76,22];
// let text1 = "";
// for( let i in numbers){
//     text1 += numbers[i] +"<br>"
// }

// document.getElementById("demo").innerHTML=text1;



// for of loop

// const name ="rohit";
// let text3 = "";
// // for(let x of name){
// //     text3 += x +"<br>";
// // }
// const persons=["rohit","swappy","mahesh","jayesh","ritesh"];
// for(let z of persons){
//     text3 +=z+"<br>";
// }




// const num1=[10,20,30,40,50];
// let text = "";
// for (let x in num1){
//     text +=num1 [x]*10 +"<br>";
// }
// for (let y of num1){
//     text += y*11+"<br>";
// }
// document.getElementById("demo").innerHTML=text;





let header = "template later";
let tags = ["tamplate string","javascript","rohit"];
let text = `<h2>${header}</h2><ul>`;

for(let x of tags){
    text += `<li>${x}</li>`;
}
text +=`</ul>`;
// document.body.innerHTML = text;
document.getElementById("container").innerHTML = text;


// display(show)
// a function passed as an arguments to another function is called as a callback function




// for each loop

const numbers = [23,45,22,65];
numbers.forEach(calculate);
function calculate(y){
    console.log(y*100)
}



let output = math.PI;
output = math.round(45.245543);
output = math.ceil(45.234);
output = math.floor(35.654);
output = math.trunk(34.543)

console.log(output);
