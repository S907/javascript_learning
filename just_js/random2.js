// function showMessage(text){
//     if(text === undefined ){
//         text = 'empty Message';
//     }
    
//     //console.log("line 1",text);
//     return text;
// }
// //console.log(showMessage());


// function sayHi(){
//     console.log('hey, there !!!');
// }

// let fun = sayHi;

// fun();
// sayHi();



function showGreet(personName, age,callback, callback2){
    let msg = 'Hello' + ','+ personName;
    let ageOfPerson = age;
    //console.log(msg);
    callback(msg);
    callback2(ageOfPerson);

}


function greetMsg(greet){
    console.log(greet);
}

function showAge(age){
    console.log(age);
}


showGreet('Adam', 25, greetMsg, showAge, );

