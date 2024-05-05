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
    // let number = (1000-parseInt(a)).toString().split('').map(i => parseInt(i));
    // 500엔, 100엔, 50엔, 10엔, 5엔, 1엔
    
    const arr = [500,100,50,10,5,1];
    
    let num = 1000-parseInt(a);
    let ctn = 0;
    
    for(let i of arr){
        ctn = ctn + Math.floor(num/i);
        num = num - (i * Math.floor(num/i));
    }
    
    console.log(ctn);
    
    
    
});