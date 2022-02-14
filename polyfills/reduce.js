let arr= [1,2,3,4,5,6]

let newArr= arr.reduce(function (accumulator, x){
        return accumulator+x;
},2);

console.log(arr);
console.log(newArr);