// Little study on declarative way of coding in javascript. Not trying to achieve anything fancy just using basics. In this we can find some usage of functions that will act as parameter for other functions.

//------------------------------------------------

let x=5;

let isEven  = x*x;

if(isEven%2==0){
    isEven= true;
}
else{
    isEven =false;
}

console.log(isEven);

//------------------------------------------------

// let isnotEven = (x)=>{
//     if(isnotEven%2==0){
//         isnotEven = true;
//     }
//     else{
//         isnotEven = false;
//     }
// }

// console.log("line number 29",isnotEven);

