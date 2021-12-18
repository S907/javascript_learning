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

let {name}= obj;
// let {add:{country}}=obj

// Changing name of key 
let {add:{country:abcd}}=obj

let {add:{state:{code: cd}}}=obj


console.log(cd);