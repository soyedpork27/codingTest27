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
    
  const n = parseInt(input[0]);
  const times = [...input[1].split(' ').map(i => parseInt(i))].sort((a,b) => parseInt(a)-parseInt(b));
  
  // 이후에 필요한 작업을 수행합니다. => 더하기
  
    let answer = 0;
    
    for(let i = 1 ; i<times.length ; i++ ){
        times[i] = times[i-1]+times[i];
    }
    
    console.log(times.reduce((a,b) => (a+b)));
    
    
    
});