const {addStudent,updateStudentInfo,updateManyProperty,deleteStudent,findOneStudent} = require("../src/functions-crud/CRUD");
const { Students } = require("./db/student");

// const {addStudent} = Students;

const newStudent = {
    Name : "ISHIMWE Blaise",
    RegNbr : 221009569,
    Email : "blaise13@gmail.com",
    Password : "123904",
    Major : "Mechanical Engineering",
    Year : 1,
    Semester : 2
} 
addStudent(newStudent); 

//Update student information

updateStudentInfo(221009568, "Major", "Software Engineer");

//update many student information
upupdatesOnStudent = {
    Email : "uwera13@gmail.com",
    Year : 4,
    Semester : 2
    
};
updateManyProperty(22100968, "updatesOnStudent");








// revmove student 

deleteStudent(221009567);


// find student information
findOneStudent(221009563);