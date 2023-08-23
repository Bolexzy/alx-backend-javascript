const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    const fields = ['CS', 'SWE'];
    const students = data.split('\n')
      .filter(line => line.trim() !== '')
      .slice(1)
      .map(student => student.split(','))
      .map(student => ({
        firstName: student[0],
        lastName: student[1],
        age: student[2],
        field: student[3]
      }));

    console.log(`Number of students: ${students.length}`);

    fields.forEach(field => {
      const fieldList = students
        .filter(student => student.field === field)
        .map(student => student.firstName);
      console.log(`Number of students in ${field}: ${fieldList.length}. List: ${fieldList}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
