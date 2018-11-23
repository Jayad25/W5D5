
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum,numsLeft,completionCallback){
  
    if (numsLeft > 0){
      reader.question("pick a number:",(res) => {
        sum += parseInt(res);
        // completionCallback(sum);
        console.log("Partial sum:" + sum);
        
          numsLeft -= 1;
          addNumbers(sum,numsLeft,completionCallback);
        
      });
    }else{
      completionCallback(sum);
      
    } 
  // return sum;
}

addNumbers(0, 3, function (sum) { 
  console.log(`Total Sum: ${sum}`);
  reader.close();
  }
);