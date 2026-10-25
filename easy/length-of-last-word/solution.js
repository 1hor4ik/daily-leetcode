var lengthOfLastWord = function (s) {
  let strArr = s.trim().split(" ");

  return strArr.at(-1).length;
};
