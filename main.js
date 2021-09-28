// Question #1
function loop() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
loop();

// Question #2
function odd() {
  let i = 3;
  let array = [];
  while (i <= 103) {
    array.push(i);
    i += 2;
  }
  return array;
}

console.log(odd())

// Question #3
function arraySum(num) {
  let sum = 0;
  num.forEach((element) => {
    sum += element;
  });

  return sum;
}

console.log(arraySum([2, 3, 5]));

//Question #4
function desc() {
  for (let i = 9; i >= 0; --i) {
    console.log(i);
  }
}

console.log(desc())

// Question #5
function factorial(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}

console.log(factorial(5));

// Question #6
function sum(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}
console.log(sum(6));

// Question #7
function secondLetter(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      result.push("Z");
    } else {
      result.push(string[i]);
    }
  }

  let newString = result.join("");
  return newString;
}

console.log(secondLetter("donuts"));
