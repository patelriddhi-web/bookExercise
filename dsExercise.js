function range(a, b, c = 1) {
  let arr = [];
  if (typeof c !== "undefined") {
    c = c;
  } else if (a > b) {
    c = -1;
  } else {
    c = 1;
  }
  if (a < b) {
    for (let i = a; i <= b; i = i + c) {
      arr.push(i);
    }
  } else if (a > b) {
    for (let i = a; i >= b; i = i + c) {
      arr.push(i);
    }
  }
  return arr;
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total);
}

sum(range(1, 10));

function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  console.log(newArr);
}
reverseArray([1, 2, 3, 4, 5, 6, 7]);
