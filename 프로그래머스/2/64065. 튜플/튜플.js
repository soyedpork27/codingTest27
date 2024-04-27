function solution(s) {
    
    // 문자열 앞 뒤 중괄호 제거
    s = s.slice(2);
    s = s.slice(0, s.length-2);
    
    // 더 좋은 방법
    // s = s.slice(2, -2);
    
    
    // 숫자 사이 },{ 제거하고 배열로 변환
    s = s.split(`},{`);
    
    // 배열 각각의 문자를 배열로 변환
    s.forEach((i,idx) => {
        s[idx] = i.split(',');
    });
    
    // 배열 크기 오름차순으로 정렬
    s.sort((a,b) => a.length - b.length);
    
    // 반환할 배열 생성
    const answer = [];
    
    // 배열에 첫 숫자 넘기기
    answer.push(s[0][0]);
    
    // 반복문으로 하나씩 배열에 숫자 넘기기
    for(let i = 1 ; i < s.length; i++){
        for(let j = 0 ; j < s[i].length; j++){
            if(!answer.some(k => k=== s[i][j])){
                answer.push(s[i][j]);
            }
        }
    }
    
    // 배열 값들 자료형 변환 후 리턴
    return answer.map(i => parseInt(i));
    
}