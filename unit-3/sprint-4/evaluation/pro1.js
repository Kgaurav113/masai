function runProgram(input) {
    var newInput = input.trim().split("\n");
    var n = +newInput[0];
    var num = newInput[1].trim().split(" ").map(Number);
    var  k = +newInput[2];
    var ans = [];
    for (let i = 0; i < n; i++) {
        var a = true;
        for (let j = 0; j < ans.length; j++) {
            if (ans[j] == num[i]) {
                a = false;
            }
        }
        if (a) {
            ans.push(num[i]);
        }
    }
    if(ans.length === k){
        console.log("True");
    }
    else{
        console.log("False");
    }
   
  }
  if (process.env.USERNAME === "vinit") {
    runProgram(`3 
    1 2 1
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
  
  