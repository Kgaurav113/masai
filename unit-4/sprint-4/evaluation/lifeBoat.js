function runProgram(input) {
    var newInput = input.trim().split("\n")
    var test = +newInput[0];
    var line = 1;
    for (let i = 0; i < test; i++) {
        var [n, limit] = newInput[line++].trim().split(" ").map(Number);
        var num = newInput[line++].trim().split(" ").map(Number);
        num.sort(function (a,b) {
            return a - b;
        });
        var count = 0;
        for (let j = 0; j < n; j++) {
            if (num[j] + num[j+1] <= limit) {
                count++;
                j++;
            }
            else{
                count++;
            }
        }
        console.log(count);
    }
   
  }
  if (process.env.USERNAME === "vinit") {
    runProgram(`2
    4 5
    3 5 3 4
    4 3
    1 2 2 3`);
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
  
  