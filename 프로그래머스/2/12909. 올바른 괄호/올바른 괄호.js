function solution(s){
    
    const result = [];
    
    s.split('').forEach((str) => {
        
        // 만약 결과 배열의 첫 번째 값이 닫힌 괄호라면 종료
        if(result[0]===')'){
            return;
        }
        
        // 만약 값이 닫힌 괄호이고 결과 배열의 마지막 값이 열린 괄호라면 결과 배열의 마지막 값(열린 괄호)을 삭제하고 종료
        if(str===')'&&result[result.length-1]==='('){
            result.pop();
            return;
        }
        
        // 두 조건에 해당하지 않는 경우 값을 배열에 전송
        result.push(str);
        
    });
    
    // 배열의 길이가 0인 경우 올바른 괄호
    return !result.length?true:false;

    
}