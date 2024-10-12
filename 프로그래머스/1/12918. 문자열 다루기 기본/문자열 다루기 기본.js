function solution(s) {
    
    if(s.length !== 4){
        if(s.length !== 6){
            return false;   
        }
    }
    
    const result = s.split('').map(i=>parseInt(i)).reduce((a,b) => (0,a+b));
    
    return Number.isNaN(result)?false:true;
    
}