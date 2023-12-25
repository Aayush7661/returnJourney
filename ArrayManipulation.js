function findUniqueElements(inputArray1, inputArray2, inputArray3) {
  let inputArray = [...inputArray1, ...inputArray2, ...inputArray3];
  let uniqueArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    let count = 0;
    for (let j = 0; j < inputArray.length; j++) {
      if (inputArray[i] == inputArray[j]) {
        count++;
      }
    }
    if (count == 1) {
      let value = uniqueArray.length;
      uniqueArray[value * 1] = inputArray[i];
    }
  }

  return uniqueArray;
}

let inputArray1 = [1, 2, 3, 4];
let inputArray2 = [2, 3, 4, 5];
let inputArray3 = [3, 4, 5, 6];

let resultArray = findUniqueElements(inputArray1, inputArray2, inputArray3);
console.log(resultArray);
