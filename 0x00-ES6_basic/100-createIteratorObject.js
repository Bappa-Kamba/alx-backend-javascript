export default function createIteratorObject(report) {
  function* employeeIterator() {
    for (const dept of Object.values(report.allEmployees)) {
      for (const emp of dept) {
        yield emp;
      }
    }
  }
  return employeeIterator();
}
