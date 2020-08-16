console.log('This is tut37');

// Pretend that the response is coming from server
const students = [
    {name:'harry', subject:'Javascript'},
    {name:'rohan', subject:'Machine Learning'}
]

function enrollStudent(student, callback){
    setTimeout(function(){
        students.push(student)
    }, 3000);
    callback();
}

function getStudents(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
    }, 1000);
}

let newStudent = {name:"sunny", subject:"python"}
enrollStudent(newStudent, getStudents), ;
//getStudents();