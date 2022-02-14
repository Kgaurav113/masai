function runProgram(input) {
    var newInput = input.trim().split("\n");
    var n = +newInput[0];
    var str = newInput[1].trim().split("");
    var x = 0;
    var y = 0;
    for (let i = 0; i < n; i++) {
        if (str[i] == "l") {
            x--;
        }
        else if (str[i] == "r") {
            x++;
        }
        else if (str[i] == "u") {
            y++;
        }
        else if (str[i] == "d") {
            y--;
        }
    }
    console.log(y,x)
   
  }
  if (process.env.USERNAME === "vinit") {
    runProgram(`4
    lldd`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  