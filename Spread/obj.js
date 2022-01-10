let obj={
    name: "Saul",
    add:{
        country:"India",
        state:{
            code:"Dl",
            pin:"2000"
        }
    }
}

// let obj2= obj;
// obj2.name="abcd",
// console.log(obj2.name);

 let obj2= {...obj};
obj2.name="abcd", //Shallow Copy
console.log(obj);
console.log(obj2.name);

// let obj2= {...obj, add:{...obj.add}}
// obj.add.country= "abcd" 


// let obj2= {...obj,add:{...obj.add,state:{...obj.add.state}}} //Deep Copy

// obj2.add.state.code= 10

// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.add.state.code=10;

// console.log(obj);
// console.log(obj2);