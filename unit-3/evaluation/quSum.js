function runProgram(input) {
    var newInput = input.trim().split("\n");
    var test = +newInput[0];
    var line = 1;
    var s = 0;
    var queue = [];
    for (let i = 0; i < test; i++) {
        var num = newInput[line].trim().split(" ").map(Number);
        line++;
        if (num[0] == 1) {
            queue.push(num[1]);
        }
        else{
            if (queue.length == 0) {
                s--;
            }
            else{
               s =  s+queue[0];
                queue.shift();
            }
        }
    }
    console.log(s);
   
  }
  if (process.env.USERNAME === "vinit") {
    runProgram(`3
    1 2
    2
    2`);
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
  
  