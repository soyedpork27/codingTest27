

function solution(num) {
    
    function CollatzFunction(num){
        
        if(num===1){
            return ;
        }else{
            ctn = ctn+1;
        }
        
        if(num % 2 === 0){
            num = num / 2;
        }else {
            num = (num * 3) + 1;
        }
        
        if(num===1){
            return ;
        }else{
            CollatzFunction(num);
        }
    }
    
    let ctn = 0;
    
    CollatzFunction(num);
    
    if(ctn>=500){
        return -1;
    }else{
        return ctn;
    }
    
}