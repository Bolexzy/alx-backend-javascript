export default function getListStudentIds(students) {
  if (Array.isArray(students) !== true) {
    return [];
  }

  return students.map((student) => student.id);
}
