let random = Math.random();

let a = prompt("Enter your first number");
let b = prompt("Enter your second number");
let c = prompt("Enter Operator");
let obj ={
    "+" : "-", 
    "*" : "+",
    "-" : "/", 
    "/" : "**",
}
if (random > 0.1){
    //perform right calculation
    alert(`your calculation is ${eval (`${a} ${c} ${b}`) }`);
}
else{
    //perform wrong calculation
    c = obj[c]
    alert(` Else statment : The result is ${eval (`${a} ${c} ${b} `)}`)
}