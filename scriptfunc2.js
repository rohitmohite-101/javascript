// input add subs
function subs(){
    let num1 = parseFloat(document.getElementById("input 1").value);
    let num2 = parseFloat(document.getElementById("input 2").value);
    var result = num1-num2;
    document.getElementById("demo").innerHTML = result;
}
function add(){
    let num1 = parseFloat(document.getElementById("input 1").value);
    let num2 = parseFloat(document.getElementById("input 2").value);
    var result = num1+num2;
    document.getElementById("demo").innerHTML = result;
}
function mult(){
    let num1 = parseFloat(document.getElementById("input 1").value);
    let num2 = parseFloat(document.getElementById("input 2").value);
    var result = num1*num2;
    document.getElementById("demo").innerHTML = result;
}
function div(){
    let num1 = parseFloat(document.getElementById("input 1").value);
    let num2 = parseFloat(document.getElementById("input 2").value);
    var result = num1/num2;
    document.getElementById("demo").innerHTML = result;
}


function display(){
    let myinput = document.getElementById("myinput").value;
    document.getElementById("demo").innerHTML = myinput;
}