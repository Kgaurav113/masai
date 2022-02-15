function runProgram(input) {
   var newInput = input.trim().split("\n");
   var test = +newInput[0];
   var line = 1;
   for (let i = 0; i < test; i++) {
        var [n, tar] = newInput[line].trim().split(" ").map(Number);
        //console.log(tar);
        line++;
        var num = newInput[line].trim().split(" ").map(Number);
        line++;
        //console.log(num);
        var count = 0;
        var ans = [];
        for (let j = 0; j < n; j++) {
           if (num[j] == 0) {
               if (ans[ans.length-1] == 0) {
                   count++;
                   ans.pop();
               }
               else{
                   ans.pop()
                   ans.push(num[j]);
               }
               //console.log(ans)
           }
           else{
               ans.push(num[j]);
               //console.log(ans);
           }
           //console.log(count);
        }
        if (count == tar) {
            console.log("Yes");
        }
        else{
            console.log("No");
        }
   }
   
  }
  if (process.env.USERNAME === "vinit") {
    runProgram(`1
    5 1
    1 0 0 0 1`);
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
  
  