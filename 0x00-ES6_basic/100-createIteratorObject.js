export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);

  const allEmployee = () => {
    let count = 0;
    for (const department of departments) {
      count += report.allEmployees[department].length;
    }
    return count;
  };

  const employeeCount = allEmployee();

  const getEmployee = (counter) => {
    let idx = 0;
    let newCounter = counter;
    for (const department of departments) {
      const employees = report.allEmployees[department];
      if (newCounter < employees.length) {
        const employee = employees[newCounter];
        return {
          employee,
          idx,
        };
      }
      newCounter -= employees.length;
      idx += 1;
    }
    return '';
  };

  return {
    [Symbol.iterator]() {
      let counter = 0;

      return {
        next() {
          if (counter < employeeCount) {
            const result = getEmployee(counter);
            counter += 1;
            return { done: false, value: result.employee };
          }
          return { done: true, value: undefined };
        },
      };
    },
  };
}
