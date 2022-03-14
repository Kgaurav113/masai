function runProgram(input) {
    var newInput = input.trim();
    var n = newInput.length;
    var ans = "";
    for (let i = 0; i < n/2; i++) {
        ans += ab; 
    }
   console.log(ans);
  }
  if (process.env.USERNAME === "vinit") {
    runProgram(`?ba??b`);
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
  
  