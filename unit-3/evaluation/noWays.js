function runProgram(input) {
    var newInput = input.trim().split("\n");
    var test = +newInput[0];
    var line = 1;
    for (let i = 0; i < test; i++) {
        var num = +newInput[line++];
        line++;
        console.log(noWays(num)); 
    }
  }
  function noWays(num) {
      if (num == 0) {
          return 1;
      }
      if (num < 0) {
          return 0;
      }
     return noWays(num-1) + noWays(num-3) + noWays(num-5);
  }
  if (process.env.USERNAME === "vinit") {
    runProgram(`1
    5`);
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
  
  