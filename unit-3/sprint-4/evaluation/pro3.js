function runProgram(input) {
    var newInput = input.trim().split("\n");
    var [k, n] = newInput[0].trim().split(" ").map(Number);
    var num = newInput[1].trim().split(" ").map(Number);
    var ans = -1;
    num.sort(function sort(a,b) {
        return b-a;
    });
    var sum = 0;
    //console.log(num);
    for (let i = 0; i < n; i++) {
        if (num[i] / n == 1) {
            ans = num[0] / n;
        }
        sum += num[i];
    }
    if (sum == k) {
        console
    }
    console.log(ans);
  }
 
  if (process.env.USERNAME === "vinit") {
    runProgram(`3 3
    1 2 3`);
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
  
  //https://oj.masaischool.com/contest/2853/problem/03