var compose = function (functions) {
  return function (x) {
    const l = functions.length;

    for (let i = l - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
};
