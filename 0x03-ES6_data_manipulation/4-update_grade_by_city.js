export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  const newStudents = students.filter((student) => student.location === city);

  return newStudents.map((student) => {
    const [newGrade] = newGrades.filter((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
}
