let arr = ["Apples","Watermelon","Guava","Pineapple","Chinsurah",];

let narr=[];

narr = arr.filter(function(fruit){
    return fruit.length>6;
})




// Traditional method using loops
// for(let i =0; i<arr.length; i++){
//     let fruit= arr[i];
//     if(fruit.length>6){
//         narr.push(fruit);
//     }
// }

console.log(arr);
console.log(narr);