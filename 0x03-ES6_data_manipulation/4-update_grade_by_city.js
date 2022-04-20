export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentsByCity = studentList.filter((student) => student.location === city);

  const myGrade = (gradeList, id) => newGrades.filter((grade) => grade.studentId === id);

  return studentsByCity.map((student) => ({
    id: student.id,
    firstName: student.firstName,
    location: student.location,
    grade: myGrade(newGrades, student.id).length > 0 ? myGrade(newGrades, student.id)[0].grade : 'N/A',
  }));
}
