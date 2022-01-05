// if(true){
//     console.log("Hello");
//     console.log("hello again");
// }

//{} -> block

let fruits = "apple";
console.log("line no 8:",fruits);
{
    //console.log(fruits); This is a temporal dead zone 
    
    let fruits;
    console.log("line no 12:",fruits);
    fruits= "orange";
    console.log("line no 14:",fruits);
}
