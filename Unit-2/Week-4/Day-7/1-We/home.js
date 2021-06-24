
const students =

    [
    
        {
            name: 'Rohit Kumar',
            attendance:95.12
        },
        {
            name: 'Summet Kumar',
            attendance:72.55
        },
        {
            name: 'Ankit',
            attendance:80.64
        },
        {
            name: 'Rahul',
            attendance:55.21
        },
        {
            name: 'Hitesh Kumar',
            attendance:82.54
        },
        {
            name: 'Anil',
            attendance:67.95
        },
        {
            name: 'Biswajit',
            attendance:35.32
        },
        {
            name: 'Abhishek',
            attendance:88.21
        },
        {
            name: 'Debasish',
            attendance:97.30
        }
    ]

 if (localStorage.getItem('students') == null) {
        localStorage.setItem('students',JSON.stringify(students))
}
    
let student = JSON.parse(localStorage.getItem('students'))

 function appendStudents(data){

let parent = document.getElementById('parent')

parent.innerHTML = null;

data.forEach(function (ele) {
    
    let div = document.createElement('div')
    
    div.setAttribute('class','items')

let p_name = document.createElement('p')
p_name.innerHTML = `Name: ${ele.name}`

    let p_atte = document.createElement('p');
    p_atte.innerHTML = `Attendance: ${ele.attendance}`

    div.append(p_name, p_atte)
    
    parent.append(div)

})
    
}
appendStudents(JSON.parse(localStorage.getItem('students')))





function slideShow() {
    const arr = ['Evaluation on 7th june','Construct week on 17th june','Next unit is react']

    let headline = document.getElementById('headline');
let i=0
    setInterval(function () {
        
        if (i == 3) {
            i=0
        }
        headline.innerHTML = arr[i]
        i++
    },3000)


}
slideShow()





function sortLH() {
    let students = JSON.parse(localStorage.getItem('students'))
    students = students.sort(function (a, b) {
        return a.attendance - b.attendance;
    })
    appendStudents(students)
}


function sortHL() {
    let students = JSON.parse(localStorage.getItem('students'))
    students = students.sort(function (a, b) {
        return b.attendance - a.attendance;
    })
    appendStudents(students)
}



