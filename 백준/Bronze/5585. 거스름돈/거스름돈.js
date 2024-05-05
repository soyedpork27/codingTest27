const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  // 입력값이 input 배열에 저장됩니다.
    let a = input[0];
    let number = (1000-parseInt(a)).toString().split('').map(i => parseInt(i));
    // 500엔, 100엔, 50엔, 10엔, 5엔, 1엔
    // 이후에 필요한 작업을 수행합니다.
    let ctn = 0;
 
    
    number.forEach((i) => {
        if(i>=5){
            ctn = ctn+i-4;
        }else{
            ctn = ctn+i;
        }
    });
    
    console.log(ctn);
});