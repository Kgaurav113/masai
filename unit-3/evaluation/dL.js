function runProgram(input) {
    var newInput = input.trim().split("\n");
    var test = +newInput[0];
    var line = 1;
    for (let i = 0; i < test; i++) {
        var ans = "";
       var [row, col] = newInput[line].trim().split(" ").map(Number);
       line++;
       line += row; 
      
    }
   
  }
  if (process.env.USERNAME === "vinit") {
    runProgram(`2
    3 3
    1 2 3
    4 5 6
    7 8 9
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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
  
  