// var firstname = "rohit";
// var lastname = "mohite";
// console.log(firstname+" "+lastname)

// let mypara = document.getElementById("demo");
// console.log(mypara);

// function display(){
//     mypara.innerHTML = "this is comming from java script";
// }
// function style1(){
//    mypara.style.color = "white";
//    mypara.style.backgroundColor = "black";
//    mypara.style.borderRadius = "10px";
//    mypara.style.border = "2px solid yellow";
// }
// var input1 = document.getElementById("myinput");
// console.log(input1);

// function change(){
// input1.value = "indore";
// }
 let mypara = document.getElementById("demo");
function run(){
   mypara.style.color = "red";
   mypara.style.backgroundColor = "black";
   mypara.style.border = "2px solid dotted red";
   mypara.style.borderRadius = "15px";
   mypara.style.textAlign = "center";
   mypara.style.fontSize = "20px";
   mypara.style.fontFamily = "arial";
}
function mult(){
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    var result = num1*num2;
    document.getElementById("demo").innerHTML = result;
}
function div(){
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    var result = num1/num2;
    document.getElementById("demo").innerHTML = result;
}
function mult(){
    let length = parseFloat(document.getElementById("input1").value);
    let breadth = parseFloat(document.getElementById("input2").value);
    var result = length*breadth;
    document.getElementById("demo").innerHTML = result;
}