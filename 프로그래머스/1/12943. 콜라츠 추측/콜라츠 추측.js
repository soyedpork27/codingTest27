let ctn = 0;

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

function solution(num) {
    
    CollatzFunction(num);
    
    return ctn>=500?-1:ctn
    
}