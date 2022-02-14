let anArr = [1,2,3,4];

function polyfill(cb,arr){

    // Keep check on parameters and operations inside loops

    let newArr=[];

    for(let i=0; i<arr.length;i++){
        newArr.push(cb(arr[i]));
    };
    return newArr;

}

function square(x){
    return x*x;
}

console.log(polyfill(square,anArr));