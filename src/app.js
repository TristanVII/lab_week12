//part 2

function selElement(sirod) {
    const selEle = document.querySelector(sirod)
    return selEle
}

console.log(selElement('nav'))

//part 3

const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]
 
function scholarship(stuList) {
    const studentsScholarship = []  
    for (const i of stuList) {
        i.grades = i.grades.reduce((a,b) => a + b, 0) / i.grades.length; {
            if (i.grades >= 80) {
                i.gradeAvg = i.grades;
                delete i.grades;
                studentsScholarship.push(i)
            }
        }
    }
    return studentsScholarship
}
console.log(scholarship(students))

//part 4

function darkMode() {
    const dark = document.querySelector('.light-theme')
    dark.classList.add('dark-theme')
}

console.log(darkMode())
