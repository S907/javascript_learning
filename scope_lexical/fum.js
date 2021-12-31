console.log("line number 1:", varName);

var varName= 10;
console.log("line number 2:", varName);

function fn(){
    console.log("line number 7:", varName);
    var varName= 20;
    console.log(varName);
}
fn();