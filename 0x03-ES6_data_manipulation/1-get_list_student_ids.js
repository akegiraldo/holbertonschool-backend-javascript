export default function getListStudentIds(studentList) {
  if (Array.isArray(studentList) === false) {
    return [];
  }
  return studentList.map((student) => student.id);
}
