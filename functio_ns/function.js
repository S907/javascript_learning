// Types of function
//function statement
// Functions can be treated as variables


//-----------------------------------------

// function sayHello(param){

//     console.log("hello", param);
//     return 10;
// }
// sayHello();
// sayHello([1,2,3,4]);  

// let rVal= sayHello();
// console.log("rVal", rVal);
//-------------------------------------------

//IIFE 
//Used in ---- require pollution closures

// (function fn(){
//     console.log("I am IIFE");
//     console.log("Runs on its own")
// })();

//----------------------------------------------

//Arrow function

// let fn=(num)=>num*num
// console.log(fn(5));

//----------------------------------------------

//First class citizens of functions 

// function sayHello(param){
//     console.log("First class Functions", param);
//     param();
//     return "sttttr"
// }
// function newOne(){
//     console.log("This is New");
// }
//sayHello([1,2,3,4]);
// sayHello(newOne);
//let rVal=sayHello(newOne);
//rVal();

//console.log(rVal);
//----------------------------------------------
//Another example of First class Functions

function outer(){
    console.log("Outer function called");
    return function inner(){
        console.log("Inner function called");
    }
}
//outer();
let rVal= outer();
console.log("Rval", rVal);
rVal();


//----------------------------------------------

// function sayHello(){

// }

// let a=10;
// let b=a;
// console.log(b);   

//------------------------------------------------

//Functional expression

// let fnContainer = function fn(){
//     console.log("An Expression");
// }
// fnContainer();

//--------------------------------------------------


//Anonymous function
//  let fnContainer = function(){
//      console.log("I am an Expression");
//      console.log("I am an Expression with an anonymous function");
//  }
//  fnContainer();

//------------------------------------------------


