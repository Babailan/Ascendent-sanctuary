function dayOfProgrammer(year) {
  // Write your code here
  if (year === 1918) {
    return `26.09.${year}`;
  }
  if (year > 1918) {
    //check if leap
    const isThisLeapYear =
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    return `${isThisLeapYear ? "12" : "13"}.09.${year}`;
  }
  if (year < 1918) {
    //
    return `${year % 4 === 0 ? "12" : "13"}.09.${year}`;
  }
}
