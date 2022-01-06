// Iterate over an array without a for loop ** needless info more on jsinfo


let arr=[1,2,3,4,5,6];

let narr = [];

narr = arr.map((value,idx)=>{
    return value*2;
})

// Same thing without arrow function
// narr = arr.map(function (value,idx){
//     return value*2;
// })

console.log(narr);


// using traditional for loops to iterate over an array and return a new one
// let arr=[1,2,3,4,5,6];

// let narr = [];
// for(let i = 0; i<arr.length; i++){
//     narr[i]=arr[i]*2;
// }
// console.log("output line 11:", arr)
// console.log("output line 12:", narr);
