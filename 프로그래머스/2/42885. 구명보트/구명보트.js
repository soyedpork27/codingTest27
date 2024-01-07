function solution(people, limit) {
    
    // 사람의 체중을 오름차순으로(작은 값 부터) 정렬
    people.sort((a,b) => (a-b));
    
    // return 할 구명보트의 수를 최대로 잡는다.
    let count = people.length;
    
    // 낮은 체중부터 배열을 순회할 인덱스
    let i = 0;
    // 높은 체중부터 배열을 순회할 인덱스
    let j = people.length-1;
    
    // 반복문 실행
    while(i < j){
        // 만약 두 사람의 체중이 제한보다 작은 경우 => 두 사람이 탑승 가능한 경우
        if(people[i]+people[j] <= limit){
            // 구명보트의 수를 하나 줄인다.
            count--;
            // 인덱스 조정
            i++;
            j--;
        }else{
            // 혼자 탑승하는 경우
            // 인덱스 조정
            j--;
        }
    }
    // 구명보트의 수 리턴
    return count;
}