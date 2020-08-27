function pattern(num) {
  let res = "";
  for (let i = 0; i < num; i++) {
    res += "#";
    console.log(res);
  }
}

pattern(7);

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FFizzBuzzizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

function chessBoard(num) {
  let res = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if ((i + j) % 2 == 0) {
        res += " ";
      } else {
        res += "#";
      }
    }

    res += "\n";
  }
  console.log(res);
}

chessBoard(8);
