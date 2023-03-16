export const checkBraces = (input: string): boolean => {
  const result = input.replace("()", "");
  if (result === "") {
    return true;
  }

  if (result === input) {
    return false;
  }

  return checkBraces(result);
};

console.log(checkBraces("()"));
console.log(checkBraces(")("));
console.log(checkBraces("("));
console.log(checkBraces(")"));
console.log(checkBraces("()()"));
console.log(checkBraces("(())"));
console.log(checkBraces("(())"));
console.log(checkBraces("(()))("));
