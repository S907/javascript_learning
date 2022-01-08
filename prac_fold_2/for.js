var students = ["Sam", "Jam", "Flyod", "Tenma"];


// Using for loop

for(let i=0; i<students.length; i++){
    console.log(students[i]);

}

//Read again

for(let student of students){
    console.log(students);
}
//----------------------------------------------------------------------------------------------------------


var exStudents= ["Tenma", "Reichman", "Johan", "Grimmer"];

while(exStudents.length>0){
    //let exStudent = exStudents.pop(); // This method pops out values from the end of an array
    let exStudent = exStudents.shift(); // This method pops out an value from the start. MORE READ REQUIRED!!!!!
    //console.log("hello", exStudent);
    console.log(`Hello, ${exStudent}!`);
}