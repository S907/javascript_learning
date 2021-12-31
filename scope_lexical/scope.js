// uses inner function that is initialized outside 


console.log("line number 1:", varName);

var varName= 10;


function bn(){
    console.log("line number 14, 10:", varName);
}


console.log("line number 2:", varName);

function fn(){
    console.log("line number 7:", varName);
    var varName= 20;

    bn();
    console.log("line number 17:", varName);
}
fn();