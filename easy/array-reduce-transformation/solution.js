var reduce = function (nums, fn, init) {
  if (nums.length != 0) {
    let val = init;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
      result = fn(val, nums[i]);
      val = result;
    }

    return result;
  }

  return init;
};
