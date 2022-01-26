// So called Pure functions and impure functions

//impure function

let aNum= 6;

function somFunc(bNum){
    return(aNum+bNum);
}
console.log("Line number 10:",somFunc(9000));


//Pure function


function somOther(hNum,gNum){
    return(hNum*gNum);

}
console.log(somOther(99,10000));