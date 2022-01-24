console.log("Top comment");


// Set-timeout plus closures examples
//---------------------------------------------------------------------------------

// function outer(){
//     var i= 6;
    
//         setTimeout (function inner(){
//             console.log(i);
//         }, 1000);
    
    
    
//     console.log("JAVASCRIPT");

   
// }

// outer();

//-----------------------------------------------------------------------------

// function outer(){

//     var i=9;
//     for(var i = 0; i<=5; i++){

//         setTimeout(function inner(){
//             console.log(i);
//         },2000);
//     }
   
//     inner();
// }

// outer();


//-----------------------------------------------------------------------------------------

// Another example in which we access the inner Set-timeout function


function out(){

    var lamb = "This Thing comes second";

    function newFn(){
    setTimeout(
        function inside(){
            console.log(lamb);
            
        }
    ),2000}
       newFn();
        console.log("Line number 57 in vs: This comes first")
}

out();

//--------------------------------------------------------------------------------------