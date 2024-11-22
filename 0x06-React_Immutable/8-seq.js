import { Seq } from "immutable";

function printBestStudents(grades) {
  const students = Seq(grades)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      score: student.score,
      firstName:
        student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName:
        student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }));

  console.log(students.toJS());
}

const grades = {
  1: {
    score: 99,
    firstName: "guillaume",
    lastName: "salva",
  },
  2: {
    score: 65,
    firstName: "john",
    lastName: "doe",
  },
  3: {
    score: 85,
    firstName: "jane",
    lastName: "doe",
  },
};

printBestStudents(grades)

export default printBestStudents(grades);

