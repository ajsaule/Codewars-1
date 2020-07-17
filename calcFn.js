function zero(fn) {
  return processNumber(fn, 0)
}
function one(fn) {
  return processNumber(fn, 1)
}
function two(fn) {
  return processNumber(fn, 2)
}
function three(fn) {
  return processNumber(fn, 3)
}
function four(fn) {
  return processNumber(fn, 4)
}
function five(fn) {
  return processNumber(fn, 5)
}
function six(fn) {
  return processNumber(fn, 6)
}
function seven(fn) {
  return processNumber(fn, 7)
}
function eight(fn) {
  return processNumber(fn, 8)
}
function nine(fn) {
  return processNumber(fn, 9)
}

function plus(numArr) {return ["+", ...numArr]}
function minus(numArr) {return ["-", ...numArr]}
function times(numArr) {return ["*", ...numArr]}
function dividedBy(numArr) {return ["/", ...numArr]}

function processNumber(fn, num) {
  if (fn === undefined) {
    return [num]
  } else {
    return calc([num, ...fn])
  }
}

function calc(arr) {
  if (arr[1] == "+") { return arr[0] + arr[2] }
  if (arr[1] == "-") { return arr[0] - arr[2] }
  if (arr[1] == "*") { return arr[0] * arr[2] }
  if (arr[1] == "/") { return Math.floor(arr[0] / arr[2]) }
}