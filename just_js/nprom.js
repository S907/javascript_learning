console.log("Everything good");

let fs = require("fs");

// fs.readFile("f1.txt", (err, data)=>{
//     console.log(data);
// });

/*  If no encoding is mentioned readFile returns Buffer format or we could pass an empty string with the data that gives us the string */



//Now doing the same function promise based


let fileToRead = fs.promises.readFile("f1.txt");

fileToRead.then(function(data){
    console.log(data);
});

fileToRead.catch(function(err){
    console.log(err);
})


console.log("End Of Line");