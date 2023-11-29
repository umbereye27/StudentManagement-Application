const {Students} = require("../db/student");

// add new students
const addStudent = (student) => {
    console.log("Before adding new student: ", Students)
    
    const number = Students.length +1;
    const newStud= {
        No:number,...student
    }
    console.log("New student : ", newStud)
    Students.push(newStud);
    console.log("After adding new student: ", Students)
}

// update students infomation

 const updateStudentInfo = (RegNbr,key,value) => {
    console.log("Before updating student info: ", Students);
     let studentToUpdate = Students.find(student => student.RegNbr === RegNbr);
     studentToUpdate[key] = value;
    console.log("After updating student info: ", Students); 
 }

// Update many students infomation
 const updateManyProperty = (RegNbr,updates) => {
    console.log("Before updating many student info: ", Students);
    let studentToUpdates = Students.filter(student => student.RegNbr === RegNbr);
    if(!studentToUpdates){
        console.log("No students to update");
g    }
    else{
        for (let key in updates){
            studentToUpdates[key] = updates[key]; 
       }
    }
   
    
    console.log("After updating many student info: ", Students); 
 }


 // delete student

  const deleteStudent = (RegNbr) => {
    let studentToDelete = Students.find(student => student.RegNbr === RegNbr);
    if(!studentToDelete){
        console.log("No student to delete");
    } 
    else{
        console.log("Student to deleted : " , studentToDelete);
        let remainingStudent = Students.filter(student => student.RegNbr !== RegNbr);
        console.log("After deleting student info: ",remainingStudent);
    }
    
 }

 // find student

 function findOneStudent(RegNbr) {
    let studentToFind = Students.find(student => student.RegNbr === RegNbr);
    if (!studentToFind) {
        console.log("No student to find");
    }
    else {
        console.log("Student  founded : ", studentToFind);
    }

}



























module.exports = {
    addStudent,
    updateStudentInfo,
    updateManyProperty,
    deleteStudent,
    findOneStudent
};