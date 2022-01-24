// const a= 10;
// const arr =[1,2,3,4,5,6];

// arr.shift();
// console.log(arr);

// -----------------------------------------------------------------------------------------------------------------
// Objects

//  let obj = {
//      name: "Captain",
//      lastName: "America",
//      sayHello: function(){
//          console.log("Line 14:" + "Inside an Object");
//      }
//  }

//  console.log(obj.name);
 
 
 

 // Loop

//  for (let key in obj){
//     console.log(key, " : ", obj[key]);
//  }
// obj.sayHello();
// console.log(obj.name + obj.lastName);


//-----------------------------------------------------------------------------------------------------------------

// Arrays


// var arr=[1,2,3,4,5];
// arr.myProp = "Hello";
// arr.Print = function(){
//      console.log("Hello from array");
// }
// console.log(arr);


//-------------------------------------------------------------

// Example of array working like objects where the indexes act like keys need to read more about this 

// var arr=[1,2,3,4,5];
// arr.myProp = "Hello";
// arr.Print = function(){
//      console.log("Hello from array");
// }

// for (let key in arr){
//         console.log(key, " : ", arr[key]);
//      }
    
//---------------------------------------------------------    

// Similar behavior like  objects READ MORE

// var arr=[1,2,3,4,5];
// arr.myProp = "Hello";
// arr.Print = function(){
//      console.log("Hello from array");

// }
// arr[95]= 100;

// console.log(arr[23]+ arr);// Need to learn abit more abt this



// Function

function fn(){
    console.log("Line number 78: This is the first func. call");

}

fn.myProp="This is the middle addition to the func. call";
fn.newFunc= function(){
    console.log("Line number 84: This is the last call");
}

fn();
console.log(fn.myProp);
fn.newFunc();


// JS =>> primitive or object