function addElementToBeginningOfArray(arr, ele) {
  [ele, ...arr]
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
