function mergeCars(car1, car2) {
  let mergedCar = {};
  for (let keyName in car1) {
    mergedCar[keyName] = car1[keyName];
  }
  for (let keyName in car2) {
    mergedCar[keyName] = car2[keyName];
  }
  return mergedCar;
}
let car1 = { brand: "Toyota", model: "Camry", year: 2020, color: "Blue" };
let car2 = {
  brand: "Honda",
  model: "Accord",
  year: 2022,
  transmission: "Automatic",
};
let mergedCar = mergeCars(car1, car2);
console.log(mergedCar);
