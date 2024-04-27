function solution(s) {
    
    s = s.slice(2);
    
    s = s.slice(0, s.length-2);
    
    s = s.split(`},{`);
    
    s.forEach((i,idx) => {
        s[idx] = i.split(',');
    });
    
    s.sort((a,b) => a.length - b.length);
    

    const answer = [];
    
    answer.push(s[0][0]);
    
    for(let i = 1 ; i < s.length; i++){
        for(let j = 0 ; j < s[i].length; j++){
            // i-1
            if(!answer.some(k => k=== s[i][j])){
                answer.push(s[i][j]);
            }
            
        }
    }
    
    
    return answer.map(i => parseInt(i));
    
}