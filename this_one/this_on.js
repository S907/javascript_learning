// console.log(this);

// function fn(){
//     console.log(this);
// }
// //fn();

// let obj ={
//     name:"Keanu",
//     title:"Constantine",
//     func: fn
// }

// obj.func();
//--------------------------------------------
// function fn(){
//     console.log(this);
//     function abc(){
//         console.log(this)
//     }
//     abc();
// }

// let obj = {
//     name:"Kenzo",
//     func: fn
// }

// obj.func();
//-------------------------------------------


// Method 1: Bind function. More reading needed

// function fn(){
//     console.log(this);
//     function abc(){
//         console.log(this)
//     }
//     let ret=abc.bind(this);
//     ret();
// }

// let obj = {
//     name:"Kenzo",
//     func: fn
// }

// obj.func();
//-------------------------------------------

// Method 2: Arrow function

// function fnGood(){
//     console.log(this);
//    abc=()=> {
//         console.log(this);
//     }
//     abc();
    
// }

// let obj ={
//     name:"Ken",
//     title: "Ren",
//     func: fnGood
// }

// obj.func();

//--------------------------

//Weird experiment----------------------------

// Need to check how this can work.............

// function fnWise(){
//     console.log(this);

//     function fnSlow(){
//         console.log(this);
        
//         function fnPeace(){
//             console.log(this);

//         }
        
//     }
//     fnPeace();

    
// }

// let obj ={
//     name:"Souvik",
//     func : fnWise
// }

// obj.fnWise();



