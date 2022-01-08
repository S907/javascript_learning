let student= {
    name: "Kyle",
    title: "Master",
    public: function raFu(){
        console.log("More thinking");
    }
}

function greetStudent(student){
    console.log(`Hello, ${student.title}`); // Backticks are interpolated strings

    //return {student};
}

greetStudent(student);

//---------------------------------------------------------------------------------------------------------


function timeRemaining(timeElapsed, endTime){

    return (endTime-timeElapsed)/-450000000000000000000000;
}

var realTime = timeRemaining(24,240);
console.log(realTime);
console.log(`Hello it is===> ${realTime}`);

//--------------------------------------------------------------------------------------------------------
