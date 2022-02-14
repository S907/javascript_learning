let anArr = [1,2,3,4];

let newArr = anArr.filter(function(x){
    return x%2===0;
})

console.log(anArr);
console.log(newArr);