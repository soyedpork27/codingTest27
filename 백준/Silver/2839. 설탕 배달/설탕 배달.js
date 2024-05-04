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
  // 예시: 두 개의 정수를 받아서 합을 출력하는 경우
  let num = parseInt(input[0]);
    
    if(num%5===0){
        console.log(num/5);
    }else{
        let p = 0;
        while(num>0){
            num = num-3;
            p++;
            
            if(num%5===0){
                console.log(num/5+p);
                break;
            }else if(num===1 || num===2){
                console.log(-1);
                break;
            }else if(num===0){
                console.log(p);
                break;
            }
        }
    }
});