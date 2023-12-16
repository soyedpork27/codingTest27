// function solution(n, lost, reserve) {
//     // 19 / 30 성공률
//     let plus = 0;
    
//     lost.forEach((i,idx) => {
//         reserve.forEach(j => {
//             if(i===j){
//                 lost.splice(idx,1);
//             }
//         })
//     });
    
//     lost.forEach((i) => {
//         if(reserve[reserve.indexOf(i-1)]){
//             reserve.splice(reserve.indexOf(i-1),1);
//             plus++;
//         }
//         else if(reserve[reserve.indexOf(i+1)]){
//             reserve.splice(reserve.indexOf(i+1),1);
//             plus++;
//         }
//     });
    
//     return n - lost.length + plus;
// }



// 풀이 성공
const solution = (n, lost, reserve) => {
    // n개의 값을 가진 배열을 만든다. 초기값이 1 인 이유는 도난되기 전 경우를 상정
    const allList = new Array(n).fill(1);
    
    // 도난된 사람의 번호를 나타내는 배열의 값을 순회하여 도난된 인덱스의 값에 -1
    lost.forEach((i) => allList[i-1] = --allList[i-1]);
    
    // 여분의 옷을 가져온 사람의 번호를 나타나는 배열의 값을 순회하여 챙겨온 인덱스의 값에 +1
    reserve.forEach((i) => allList[i-1] = ++allList[i-1]);
    
    // 본격적인 greedy 알고리즘 적용
    
    // 앞 => 뒤 (앞을 기준으로 뒤를 탐색해 체육복을 교환하는 경우 오차없이 문제를 해결할 수 있다.)
    // 한 방향을 기준으로 교환이 진행되어야 모든 경우의 수를 빠짐없이 탐색할 수 있다. => 앞의 선택이 이후의 선택에 영향을 주지 않는다.
    allList.forEach((i,idx) => {
        if(i===2){
            // 앞에서 체육복이 있고 뒷사람이 체육복이 없는 경우
            if(allList[idx+1] === 0){
                // 앞 사람의 값에 1 감소 : 2 => 1
                allList[idx]--;
                // 뒷 사람의 값에 1 추가 : 0 => 1
                allList[idx+1]++;
            }
        }else if(i===0){
            // 앞에서 체육복이 없고 뒷 사람이 체육복이 있는 경우
            if(allList[idx+1] === 2){
                // 앞 사람의 값에 1 추가 : 0 => 1
                allList[idx]++;
                // 뒷 사람의 값에 1 감소 : 2 => 1
                allList[idx+1]--;
            }
        }
    })
    // allList 배열의 값 중 0 이상인 값을 카운트 하여 리턴한다. => 체육복을 입을 수 있는 학생의 수
    return allList.filter(i => i>0).length;
}


// 두 번째 풀이 => 실패
// const solution = (n, lost, reserve) => {
//     const mockLost = [...lost];
//     mockLost.forEach((i,idx) => {
//         if(reserve.some(j => j === i-1)){
//             lost[idx] = '';
//             reserve[reserve.indexOf(i-1)] = null;
//         }else if(reserve.some(j => j === i+1)){
//             lost[idx] = '';
//             reserve[reserve.indexOf(i-1)] = null;
//         }
//     });
//     return n - lost.filter(i => typeof i !== "string").length;
// }