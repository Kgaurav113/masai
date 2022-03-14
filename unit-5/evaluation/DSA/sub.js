function runProgram(input) {
    var newInput = input.trim().split("\n");
    var n =+newInput[0];
    var num = newInput[1].trim().split(" ").map(Number);
    var test = +newInput[2];
    var line = 3;
    Math.floor
    for (let i = 0; i < test; i++) {
         var q = +newInput[line];
         line++;
         var count = 0;
         for (let j = 0; j < n; j++) {
              if (q <= num[j]) {
                  count++;
              }
         }
      console.log(count);
    }
   
  }
  if (process.env.USERNAME === "vinit") {
    runProgram(`5
    1 4 10 5 6
    4
    2
    3
    5
    11`);
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
  
  