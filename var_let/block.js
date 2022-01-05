// if(true){
//     console.log("Hello");
//     console.log("hello again");
// }

//{} -> block

let fruits = "Apple";
console.log("line no 8:",fruits);
{
    //console.log(fruits); This is a temporal dead zone 
    
    let fruits;
    console.log("line no 12:",fruits);
    
    fruits = "Orange";
    console.log(fruits);

{    
    console.log("line no 14:",fruits);

}
console.log("line no 21:", fruits);
}
console.log("line no 25:", fruits);
