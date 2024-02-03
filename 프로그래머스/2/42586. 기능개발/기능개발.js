function solution(progresses, speeds) {
  progresses.reverse();
  speeds.reverse();
  
  let result = [];
  while(true){
    let ctn = 0;
    progresses = progresses.map((i,idx) => i+speeds[idx]);
    // console.log(progresses);
    if(progresses[progresses.length-1] >= 100){
      for(let i = progresses.length-1 ; i >= 0 ; i--){
              if(progresses[i]>=100){
                  progresses.pop();
                  speeds.pop();
                  ctn++;
              }else{
                break;
              }
      }
      result.push(ctn);
    }
    if(!progresses.length){
      break;
    }
  }
  return result;
}