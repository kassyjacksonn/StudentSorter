var students = ["sofia", "devin", "najely", "kassandra", "fatburger ricki", "alejandra", "lashawnte", "xochi", "jimmie","jonathan delgado", "andres", "eric", "jonathan interiano", "scott", "javier", "lissette", "rodolfo", "twin", "rafa", "brian", "john rodriguez", "dre", "brandon green"]

// console.log(students.length)
function sortStudents(studentsArray, size){
    var groups = []
    var currentGroup = []
    // Loop over all students
    while (studentsArray.length > 0) {
        // pick a random student
        var randomNumber = Math.floor(Math.random
            () * studentsArray.length)
       // pick a random student
        var randomStudent = 
            studentsArray[randomNumber]
        // add random student to current group
        currentGroup.push(randomStudent)
        // delete random student
        studentsArray.splice(randomNumber, 1)
        // if the group sizze is large enough
        // add them to the groups array
        if (currentGroup.length >= size){
            groups.push(currentGroup)
            // reset the current group
            currentGroup = []
        }
    }
    
    if (currentGroup.length > 0){
    groups.push(currentGroup)
    }
    
    for (var i = 0; i < groups.length; i++){
        console.log('Group #'+ (i+1)+": "+groups[i])
    }
}
console.log(students.indexOf("devin"))
// sortStudents(students, 2)



