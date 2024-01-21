const solution = (prices) => {
    const n = prices.length;
    
    // 0으로 채워진 배열 생성
    const result = new Array(n).fill(0);
    
    // 이중 반복문을 실행
    for(let i = 0 ; i < n ; i++){
        for(let j = i+1; j < n; j++){
            // i 번째 값과 i+1번째 값을 비교 했을 때 가격이 떨어진다면
            if(prices[i] > prices[j]) {
                // 결과배열의 i번째 값을 j-i로 할당하고 반복문을 탈출한다.
                result[i] = j-i;
                break;
            }else {
                // i번째 값에 1 씩 추가한다.
                // 끝까지 떨어지지 않는다면 1초씩 증가!
                result[i]++
            }
        }
    }
    // 결과 배열 리턴
    return result;
}
