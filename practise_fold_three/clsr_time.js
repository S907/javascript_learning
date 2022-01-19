console.log("Top comment");


// Set-timeout plus closures examples
//---------------------------------------------------------------------------------

// function outer(){
//     var i= 6;
//     setTimeout (function (){
//         console.log(i);
//     }, 1000);
//     console.log("JAVASCRIPT");
// }

// outer();

//-----------------------------------------------------------------------------

function outer(){

    var i=9;
    for(var i = 0; i<=5; i++){

        setTimeout(function inner(){
            console.log(i);
        },2000);
    }
   
    inner();
}

outer();
