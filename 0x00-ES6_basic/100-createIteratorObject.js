export default function createIteratorObject(report) {
  const Employee = [];
  // eslint-disable-next-line no-unused-vars
  for (const [departments, employees] of Object.entries(report.allEmployees)) {
    for (const employee of employees) {
      Employee.push(employee);
    }
  }
  return Employee;
}
