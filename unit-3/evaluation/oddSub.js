function runProgram(input) {
   var newInput = input.trim().split("\n");
   var test = +newInput[0];
   var line = 1;
   for (let i = 0; i < test; i++) {
       var n = +newInput[line];
       line++;
       var num = newInput[line].trim().split(" ").map(Number);
       line++;
       oddSub(n, num);
   }
  }
  function oddSub(n, num){
      var count = 0;
      for (let i = 0; i < n; i++) {
         if (num[i] % 2 == 1) {
             count++;
         }
      }
      if (count == 0 || count == 1) {
          console.log("no");
      }
      else{
          console.log("yes");
      }
  }
  if (process.env.USERNAME === "vinit") {
    runProgram(`2
    4
    4 3 2 1
    2
    2 4`);
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
  
  