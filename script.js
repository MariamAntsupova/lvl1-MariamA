let students = [{
    name: 'Mariami',
    grades: [85, 60, 50, 35]
},
{
    name: 'Gela',
    grades: [45, 30, 80, 12]
},
{
    name: 'Shota',
    grades: [100, 56, 80, 42]
},
{
    name: 'Kukuri',
    grades: [60, 50, 40, 19]
},

]

let subjects = ['front-end', 'java', 'flutter', 'python']

let subject = document.getElementById('tbody');
let student = document.getElementById('students');

addToHtml();

function addStudent() {
let studentInput = document.querySelector('#student').value;
let frontGrade = document.querySelector('#front').value;
let javaGrade = document.querySelector('#java').value;
let flutterGrade = document.querySelector('#flutter').value;
let pythonGrade = document.querySelector('#python').value;



students.push({
    name: studentInput,
    grades: [frontGrade, javaGrade, flutterGrade, pythonGrade]
});

// console.log(students, subjects);
addToHtml();
}

function average(listt) {
sum = 0;
for (var i = 0; i < listt.length; i++) {
    sum += listt[i];
}
let averageNum = sum / listt.length;

return averageNum;
}

function addToHtml() {
student.innerHTML = `<th></th>`;
subject.innerHTML = '';
for (let j = 0; j < students.length; j++) {
    student.innerHTML += `<th>${students[j].name}</th>`
}
for (let i = 0; i < subjects.length; i++) {
    let subjectAverageList = [];
    for (let j = 0; j < students.length; j++) {
        subjectAverageList.push(Number(students[j].grades[i]));
        // console.log(subjectAverageList);
    }
    let tds = '';
    for (let student of students) {
        tds += ` <td style = "background-color: ${student.grades[i]>= average(subjectAverageList) ? `rgb(26, 206, 35)` : `red`} " > ${String(student.grades[i])} </td>\n`;
    }

    let trs = `<tr> <td>${subjects[i]}</td> ` + tds + `<td>${average(subjectAverageList)}</td> </tr>`;
    subject.innerHTML += trs;

}
student.innerHTML += `<th>Average</th>`;
}