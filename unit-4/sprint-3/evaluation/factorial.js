function runProgram(input) {
    var newInput = input.trim().split("\n");
   var test = +newInput[0];
   var line = 1;
   for (let i = 0; i < test; i++) {
       var n = +newInput[i];
       
   }
   
  }
  if (process.env.USERNAME === "vinit") {
    runProgram(``);
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
  
  