function runProgram(input) {
   var newInput = input.trim().split("\n");
   var test = +newInput[0];
   var line = 1;
   for (let i = 0; i < test; i++) {
        var [n, tar] = newInput[line].trim().split(" ").map(Number);
        line++;
        var num = newInput[line].trim().split(" ").map(Number);
        line++;
        var count = 0;
        var ans = [];
        for (let j = 0; j < n; j = j+2) {
            if (num[j] == num[j+1]) {
                
            }
        }
   }
   
  }
  if (process.env.USERNAME === "vinit") {
    runProgram(`1
    5 1
    1 0 0 0 1`);
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
  
  