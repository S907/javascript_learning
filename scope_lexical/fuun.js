// uses inner function


console.log("line number 1:", varName);

var varName= 10;
console.log("line number 2:", varName);

function fn(){
    console.log("line number 7:", varName);
    var varName= 20;

    function bn(){
        console.log("line number 14:", varName);
    }
    bn();
    console.log("line number 17:", varName);
}
fn();