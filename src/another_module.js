const _ = require("lodash");

function deepFlatMapUsingLodash(arr1) {
  return _.flatMapDeep(arr1);
}

const arr = [[1, 2, 3, 4, [5, [6]]], 7, 8, 9, [10, [11, [12, [13]]]]];
console.log(deepFlatMapUsingLodash(arr));
