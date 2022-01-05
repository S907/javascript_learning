// Non-primitive => array, objects, functions

function sayHi(param){
    // console.log("Hello");
    // console.log("param recieved", param);

    let gVal = Math.random()>0.5? true:" less than 0.5";
    return gVal;

}
// sayHi();
// sayHi("hello");

let rVal=sayHi([1,2,3,4,5]);
console.log("rval", rVal);        