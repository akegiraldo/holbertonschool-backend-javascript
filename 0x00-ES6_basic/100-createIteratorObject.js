export default function createIteratorObject(report) {
  const deparments = report.allEmployees;

  let employees = [];
  for (const department of Object.values(deparments)) {
    employees = [...employees, ...department];
  }

  return employees[Symbol.iterator]();
}
