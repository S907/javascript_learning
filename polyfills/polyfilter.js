// Filter function example

let thisArr = [2,4,44,66,77,91,5,6];

let newArr= thisArr.filter(function(x){
    return x%2===0;
});

// console.log(newArr);

//Polyfill of filter function

 

function filterPoly(arr,cb){
    let secondArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (cb(arr[i])) {
         secondArr.push(arr[i]);
      }
    }
    return secondArr;
}

function evenFinder(x){
    if(x%2===0){
        return x;
    }
}

//console.log(filterPoly(thisArr,evenFinder));


//----------------------------------------------------------------------------------------

