function findCommonValue(array1, array2) {
  let commonValue = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        let value = commonValue.length;
        commonValue[value * 1] = array1[i];
      }
    }
  }
  return commonValue;
}
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];
let resultArray = findCommonValue(array1, array2);
console.log(resultArray);