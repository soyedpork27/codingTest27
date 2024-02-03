function solution(priorities, location) {
    
    let count = 0;
    
    while(true){
        let max = Math.max(...priorities);
        if(priorities[0] === max ){
            priorities.shift();
            count++;
            if(location===0){
                break;
            }
            location--;
        }else{
            let a = priorities.shift();
            priorities.push(a);
            if(location===0){
                location = priorities.length-1;
            }else{
                location--;
            }
        }
        
        
    }
    return count;
    
}