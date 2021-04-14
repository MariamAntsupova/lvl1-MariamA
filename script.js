let students = [
    {
        name:'Mariami' , 
        grades:[85,60,50,35]
    },
    {
        name:'Gela' , 
        grades:[45,30,80,12]
    },
    {
        name:'Shota' , 
        grades:[100,56,80,42]
    },
    {
        name:'Kukuri' , 
        grades:[60,50,40,19]
    }
]

let subjects = ['front-end' , 'java', 'flutter', 'python']

let subject = document.getElementById('tbody');
let student = document.getElementById('students');

function average(listt) {
    sum=0 ; 
    for(var i=0 ; i<listt.length ; i++){
      sum += listt[i];
    }
    let averageNum = sum / listt.length;
  
    return averageNum;
}
// let average = document.getElementById('students')

for (let j = 0; j < students.length; j++){
    student.innerHTML += `<th>${students[j].name}</th>`
}
for (let i = 0; i < subjects.length; i++){
    let subjectAverageList = [];
    for (let j = 0; j < students.length; j++) {
        subjectAverageList.push(students[j].grades[i]);
    }
    let averageNum = average(subjectAverageList);

    subject.innerHTML += `
    <th>${subjects[i]}</th>
    <td style = "background-color: ${students[0].grades[i] >= averageNum ? "rgb(26, 206, 35)" : "red"}">${students[0].grades[i]}</td>
    <td style = "background-color: ${students[1].grades[i] >= averageNum ? "rgb(26, 206, 35)" : "red"}">${students[1].grades[i]}</td>
    <td style = "background-color: ${students[2].grades[i] >= averageNum ? "rgb(26, 206, 35)" : "red"}">${students[2].grades[i]}</td>
    <td style = "background-color: ${students[3].grades[i] >= averageNum ? "rgb(26, 206, 35)" : "red"}">${students[3].grades[i]}</td>
    <td>${averageNum}</td>
    `
}
student.innerHTML += `<th>Average</th>`
