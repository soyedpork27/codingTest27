function solution(s){
    
    let ctn = 0;
    
    const arr = [];
    
    s.split('').forEach((str) => {
        
        if(arr[0]===')'){
            return;
        }
        
        if(str===')'&&arr[arr.length-1]==='('){
            arr.pop();
            return;
        }
        
        arr.push(str);
        
    });
    
    return !arr.length?true:false;

    
}