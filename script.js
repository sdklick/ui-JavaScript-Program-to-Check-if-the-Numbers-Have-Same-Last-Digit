//JavaScript Program to Check if the Numbers Have Same Last Digit

const check = () => {
  let f1 = document.getElementById("f1").value;
  let f2 = document.getElementById("f2").value;
  let f3 = document.getElementById("f3").value;
  let result = document.getElementById("result");
  let che1 = f1 % 10;
  let che2 = f2 % 10;
  let che3 = f3 % 10;

  if (che1 === che2 && che1 === che3) {
    result.innerHTML = `${f1},${f2},${f3} last digit same`;
  } else {
    result.innerHTML = `${f1},${f2},${f3} last digit Not same`;
  }
}