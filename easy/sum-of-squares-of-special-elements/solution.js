var sumOfSquares = function (nums) {
  const n = nums.length;
  let squaredSum = 0;

  for (let i = 0; i < n; i++) {
    if (n % (i + 1) === 0) {
      const squaredNum = nums[i] ** 2;
      squaredSum += squaredNum;
    }
  }

  return squaredSum;
};
