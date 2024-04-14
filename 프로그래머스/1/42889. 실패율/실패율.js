function solution(N, stages) {
    
    const obj = {};
    
    for(let i = 0 ; i < N+1 ; i++){
        obj[i+1] = [0,0];
    };
    
    
    stages.forEach((i) => {
        const arr = [];
        
        for(let k = i ; k > 0 ; k--){
            arr.push(k);
        }
        
        arr.forEach((j,jdx)=>{
            if(jdx===0){
                obj[j][1]++;
            }
            obj[j][0]++; 
        });
        
    });
    

    
    const result = [];
    
    for(let i = 1 ; i <= N ; i++ ){
        if(obj[i][0]===0){
            result.push(0);
            continue;
        }
        if(obj[i][1]===0){
            result.push(0);
            continue;
        }
        result.push(obj[i][1]/obj[i][0]);
    };
    
    // 모든 실패율이 일치하는 경우
    if(result.every((i) => i===result[0])){
        return result.map((_,idx) => idx+1);
    }
    
    const a = Array(...new Set([...result]));
    
    a.sort((a,b) => (b-a));
    
    const answer = [];
    
    a.forEach((i) => {
        const b = [];
        for(let j in result){
            if(i===result[j]){
                b.push(parseInt(j)+1);
            }
        }

        b.forEach((j)=>{
            answer.push(j);
        })
    });

    return answer;
}