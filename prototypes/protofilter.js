Array.prototype.myFilter= function(cb){
    let pushArr = [];

    for(let i=0; i<this.length; i++){
            pushArr.push(cb(this[i]));
    }
    return pushArr;
}

// Return statement otherwise you see undefined today at 17.02.2022 //  missed the undefined and became late

function square(x){
    return x*x;
}
 

let arr=[1,100,900,724,2];

let filterArr = arr.myFilter(square);

console.log(filterArr);

