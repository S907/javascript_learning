let arr = ["Hi", "I", "s", "y"];

// let a= arr[0];
// let b=arr[1];

//Destructuring
// let [a,b,c,d]= arr

// to access at points [a, b,d]=["Hi", "I" and so on]
// let [a,b,,d]= arr

let [a,b,c,d, extra='hlo']= arr

console.log(a,b,c,d, extra);