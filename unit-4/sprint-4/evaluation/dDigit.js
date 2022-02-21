function runProgram(input) {
    var [num, tar] = input.trim().split(" ");
    var count = 0;
    for (let i = 0; i < num.length; i++) {
       if(num[i] == tar){
           count++;
       }
    }
    console.log(count);
  }
  if (process.env.USERNAME === "vinit") {
    runProgram(`113344887 3`);
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
  
  