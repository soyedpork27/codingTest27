

function solution(x){
    
    const num = x.toString().split('').map(i => parseInt(i)).reduce((a,b) => (0,a+b));
    
    return x%num===0?true:false;
    
}