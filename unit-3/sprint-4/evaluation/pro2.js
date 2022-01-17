function runProgram(input) {
    var newInput = input.trim().split("\n");
    var n = +newInput[0];
    var num1 = newInput[1].trim().split(" ").map(Number);
    var num2 = newInput[2].trim().split(" ").map(Number);
    for (let i = 0; i < n; i++) {
        if (num1[i] <= 15 && num2[i] <= 7) {
            console.log("Boarding");
        }
        else{
            console.log("Stop");
        }
    }
   
  }
  if (process.env.USERNAME === "vinit") {
    runProgram(`4
    12 14 15 6
    8 5 7 4`);
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
  
  //https://oj.masaischool.com/contest/2853/problem/02