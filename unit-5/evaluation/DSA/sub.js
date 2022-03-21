function runProgram(input) {
    var newInput = input.trim().split("\n");
    var test = +newInput[0];
    var line = 1;
    for (let i = 0; i < test; i++) {
        var num = newInput[line].trim().split(" ").map(Number);
        line++;
        missingLetter(num)
    }
  }
  function missingLetter(num) {
    var low = 0;
    var high = 12
    var res = ""
    while (low<=high) {
        var mid = Math.floor(low+(low+high/2));
        console.log(mid);
        // if (num[mid] == key) {
        //     res = mid;
        // }
        // else if (num[mid] < key) {
        //     low = mid+1;
        // }
        // else{
        //     high = mid-1;
        // }
    }
    return res;
}
  
  if (process.env.USERNAME === "vinit") {
    runProgram(`2
    0 1 2 4 5 6 9 10 11 12 
    1 2 3 5 7 8 9 10 11 12`);
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
  
  