var isValid = function (s) {
  const stack = [];
  const parenthesis = "() [] {}";

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];

    let combinedParenthesis = open + closed;

    if (parenthesis.includes(combinedParenthesis)) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0;
};
