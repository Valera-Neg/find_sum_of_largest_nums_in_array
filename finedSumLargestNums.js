const flatten = values =>
  values.reduce(
    (acc, item, index, array) =>
      acc.concat(Array.isArray(item) ? flatten(item) : item),
    []
  );

const sumLargestNumbers = function (data) {
  const max1 = Math.max(...data);
  const num = data.filter(n => n !== max1);
  const max2 = Math.max(...num);
  return max1 + max2;
};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers(flatten([10, 4, 34, [1, 2, 95], 6, 92, 2])));
