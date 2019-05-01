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

