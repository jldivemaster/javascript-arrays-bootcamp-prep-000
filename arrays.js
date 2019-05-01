var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, ele) {
  return [ele, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele)
}

function addElementToEndOfArray(arr, ele) {
  [arr,...ele]
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele)
}

function accessElementInArray(arr, idx) {
  return arr[idx]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
}

function removeElementFromBeginningOfArray(arr) {
  arr.slice(0)
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  arr.slice(0, arr.length - 1)
}
