let cap ={
    name: "Steven",
    lastName: "Rogers",
    address:{
        city:"Manhattan",
        state: "New York"
    }
    , age: "35",
      isAvenger:true,
      movies:["Cap America", "Civil War", "Winter soldier"],
      sayHi: function() {
          console.log("Cap finds home");
      }
};
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movies[0]);
// cap.sayHi();

// Set/Update
cap.age= 108;
