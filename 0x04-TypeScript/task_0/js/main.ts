interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Yazmín",
  lastName: "Giraldo",
  age: 24,
  location: "Medellín",
};

const student2: Student = {
  firstName: "Kevin",
  lastName: "Giraldo",
  age: 23,
  location: "Medellín",
};

const studentsList = [student1, student2]

function generateTableHead(table: HTMLTableElement, data: string[]) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table: HTMLTableElement, data: Student[]) {
  for (const element of data) {
    let row = table.insertRow();
    for (const key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(studentsList[0]);
generateTableHead(table, data);
generateTable(table, studentsList);
