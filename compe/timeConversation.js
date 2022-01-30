function timeConversion(s) {
  // Write your code here
  let hour = parseInt(s.slice(0, 2));
  const minute = s.slice(3, 5);
  const second = s.slice(6, 8);
  const amOpm = s.slice(8, 10);
  if (amOpm === "AM" && hour === 12) {
    hour = "00";
    return `${hour}:${minute}:${second}`;
  }
  if (amOpm === "AM" && hour > 0) {
    return `0${hour}:${minute}:${second}`;
  }
  if (amOpm === "PM") {
    if (hour === 12) {
      return `${hour}:${minute}:${second}`;
    }
    hour = 12 + hour;
    return `${hour}:${minute}:${second}`;
  }
}

console.log(timeConversion("06:40:03AM"));
