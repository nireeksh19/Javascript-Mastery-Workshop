variable
var firstName = "Nireeksh shetty";
console.log(firstName);

firstName = 1;
console.log(firstName);
var firstName =2;
console.log(firstName);


var a=1;
console.log(typeof a);
var a ="hello";
console.log(typeof a);
var i;
console.log(typeof i);
i=null;
console.log(typeof i);


// func def
function fn(){
    console.log("hello from function");
}
// fun invokation
fn()
// func expression
var fn1 = function(){
    console.log("WHAT IS THIS");
};
fn1();
// IIFE 
(function (){
    console.log("immediately invoking function expression");
})();

// argument passing

function logger (a){
    console.log(a);
}
logger("nireeksh,shetty");

function sum(a,b){
    return a+b;
}

console.log(sum(2,3));

a();
function a(){
    console.log("123");
}

logResult(3);

function logResult(a) {
    var sum = a + 5;
    console.log(sum);
}
logResult(5);

var arr1=[1,2,3,true,[3,4,5]];
console.log(arr1);

var a=6;
while (a>0) {
    console.log(a);
    a--;
}

for (var index = 0; index < 5; index++) {
    console.log(index);
}

console.log(index);