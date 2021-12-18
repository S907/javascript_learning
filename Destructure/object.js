let obj={
    name:"Sally",
    state: "Kortnar",
    country:"India"
}

// let name=obj.name;
// let state= obj["state"];

// let {name, state, country}= obj


// let {name, state, country, extra}= obj

// let {name, state, country, extra="Differrent value"}= obj

// to change name of key

let {name: firstName, state, country, extra="Differrent value"}= obj

console.log(firstName,state,country,extra);