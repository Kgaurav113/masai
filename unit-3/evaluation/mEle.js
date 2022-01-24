function runProgram(input) {
    var newInput = input.trim().split("\n");
    var test = +newInput[0];
    var line = 1;
    for (let i = 0; i < test; i++) {
        var n = +newInput[line];
        line++;
        var num = newInput[line].trim().split(" ").map(Number);
        line++;
        majorElement(n, num);
    }
  }
  function majorElement(n, num) {
      var ans = -1;
      var a = Math.floor(n/2);
      for (let i = 0; i < n; i++) {
         var con = num[i];
         var count = 0;
         for (let j = 0; j < n; j++) {
             if (num[j] == con) {
                 count++;
             }
         }
         if (count > a) {
             ans = con;
         }
      }
      console.log(ans);
  }
  if (process.env.USERNAME === "vinit") {
    runProgram(`3
    3
    1 1 2
    4
    1 1 1 2
    2
    1 2`);
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
  
  