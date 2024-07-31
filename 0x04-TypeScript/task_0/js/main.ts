interface Student {
    firstName : string;
    lastName : string;
    age : number;
    location : string
}

let Student_1 : Student = {
    firstName : "Ezechiel",
    lastName : "Kiregha",
    age : 24,
    location : "Kigali"
}
let Student_2 : Student = {
    firstName : "Larry",
    lastName : "Peige",
    age : 24,
    location : "Washington"
}
let studentList : Student[] = [Student_1, Student_2]

const table = document.createElement("table")
const tableRow = document.createElement("tr")
const tableHeader1 = document.createElement("th")
const tableHeader2 = document.createElement("th")

tableHeader1.textContent = "First Name"
tableHeader2.textContent = "Location"

tableRow.appendChild(tableHeader1)
tableRow.appendChild(tableHeader2)
tableRow.appendChild(tableRow)

studentList.forEach((student) => {
    const row = document.createElement("tr")
    const tableData1 = document.createElement("td")
    const tableData2 = document.createElement("td")

    tableData1.textContent = student.firstName
    tableData2.textContent = student.location

    row.appendChild(tableData1)
    row.appendChild(tableData2)

    table.appendChild(row)
})
document.body.appendChild(table)
