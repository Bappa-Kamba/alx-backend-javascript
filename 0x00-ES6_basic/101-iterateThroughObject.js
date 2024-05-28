export default function iterateThroughObject(reportWithIterator) {
  const empNames = [];
  for (const emp of reportWithIterator) {
    empNames.push(emp);
  }
  return empNames.join(' | ');
}
