function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

min(10, 8);

function isEven(num) {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else {
    return pattern(num - 2);
  }
}

console.log(isEven(15));

function countChar(str, ch) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      count++;
    }
  }
  return count;
}

console.log(countChar("kakkerlak", "k"));
