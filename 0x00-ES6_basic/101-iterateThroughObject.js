export default function iterateThroughObject(reportWithIterator) {
  const newEmployeeList = [];

  for (const employee of reportWithIterator) {
    newEmployeeList.push(employee);
  }
  return newEmployeeList.join(' | ');
}
