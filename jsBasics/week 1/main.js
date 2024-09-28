function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}

function displayResult(data) {
  console.log("result of sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

// const ans = sum(1, 2);
// displayResult(ans)
// displayResultPassive(ans)

///////////////////////////////////////////////////

// it is called call back function.
function sum(num1, num2, fnToCall) {
  let result = num1 + num2;
  fnToCall(result);
}

function displayResult(data) {
  console.log("result of sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

// const ans = sum(1, 2,displayResultPassive);

function calculateArithmatic(a, b, type) {
  if (type == "sum") {
    return a + b;
  }
  if (type == "minus") {
    return a - b;
  }
}

// const value = calculateArithmatic(1, 3, "minus");
// console.log(value);

/////////////////////////////////////////////////////////////

function calculateArithmatic(a, b, arithmaticFinalFunction) {
  const ans = arithmaticFinalFunction(a, b);
  return ans;

  // if (type == "sum") {
  //     const value = sum(a, b);
  //     return value;
  // }
  // if (type == "minus") {
  //     const value = sub(a, b)
  //     return value;
  // }
}

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

// const value = calculateArithmatic(1, 3, sum);
// console.log(value);

////////////////////////////////////////////////////////

// setTimeout

function greet() {
  console.log("hello World");
}

setTimeout(greet, 1 * 1000);

//////////////////////////////////////////////////////////

// setInterval

function greetMe() {
  console.log("hello Om");
}

setInterval(greetMe, 1 * 1000 )


