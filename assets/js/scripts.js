var currentNumber = document.getElementById("currentNumber");
var cn = 0;
var sub = document.getElementById("sub2");
var add = document.getElementById("add2");
var minNum = -5;
var maxNum = 5;

function decrement() {
  if (cn > minNum) {
    cn = cn - 1;
    currentNumber.innerHTML = cn;
    if (cn < 0) {
      currentNumber.style.color = "red";
    }
    if (cn === 0) {
      currentNumber.style.color = "black";
    }
    if (cn > 0) {
      currentNumber.style.color = "green";
    }
  }
}

function increment() {
  if (cn < maxNum) {
    cn = cn + 1;
    currentNumber.innerHTML = cn;
    if (cn < 0) {
      currentNumber.style.color = "red";
    }
    if (cn === 0) {
      currentNumber.style.color = "black";
    }
    if (cn > 0) {
      currentNumber.style.color = "green";
    }
  }
}

console.log(sub != null);
if (sub != null) {
  sub.addEventListener("click", decrement);
}
if (add != null) {
  add.addEventListener("click", increment);
}
