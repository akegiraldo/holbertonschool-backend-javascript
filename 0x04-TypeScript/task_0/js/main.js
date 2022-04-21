var student1 = {
    firstName: "Yazmín",
    lastName: "Giraldo",
    age: 24,
    location: "Medellín"
};
var student2 = {
    firstName: "Kevin",
    lastName: "Giraldo",
    age: 23,
    location: "Medellín"
};
var studentsList = [student1, student2];
function generateTableHead(table, data) {
    var thead = table.createTHead();
    var row = thead.insertRow();
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var key = data_1[_i];
        var th = document.createElement("th");
        var text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}
function generateTable(table, data) {
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var element = data_2[_i];
        var row = table.insertRow();
        for (var key in element) {
            var cell = row.insertCell();
            var text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}
var table = document.querySelector("table");
var data = Object.keys(studentsList[0]);
generateTableHead(table, data);
generateTable(table, studentsList);
