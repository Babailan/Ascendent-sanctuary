function gradingStudents(grades) {
  // Write your code here
  for (let i = 0; i < grades.length; i++) {
    const gradedRounded = grades[i].toString().split("");
    if (grades[i] < 38) {
      continue;
    }
    if (parseInt(gradedRounded[1]) > 5) {
      gradedRounded[0] = parseInt(gradedRounded[0]) + 1;
      gradedRounded[1] = 0;
      if (parseInt(gradedRounded.join("")) - grades[i] < 3) {
        grades[i] = parseInt(gradedRounded.join(""));
      }
    }
    if (parseInt(gradedRounded[1]) < 5) {
      gradedRounded[1] = 5;
      if (parseInt(gradedRounded.join("")) - grades[i] < 3) {
        grades[i] = parseInt(gradedRounded.join(""));
      }
    }
  }
  return grades;
}
console.log(gradingStudents([78, 67, 38, 33]));
