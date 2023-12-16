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




const solution = (n, lost, reserve) => {
    // n개의 값을 가진 배열을 만든다. 초기값이 1 인 이유는 도난되기 전 경우를 상정
    const allList = new Array(n).fill(1);
    
    // 도난된 사람의 번호를 나타내는 배열의 값을 순회하여 도난된 인덱스의 값에 -1
    lost.forEach((i) => allList[i-1] = --allList[i-1]);
    
    // 여분의 옷을 가져온 사람의 번호를 나타나는 배열의 값을 순회하여 챙겨온 인덱스의 값에 +1
    reserve.forEach((i) => allList[i-1] = ++allList[i-1]);
    
    // 앞 => 뒤
    allList.forEach((i,idx) => {
        if(i===2){
            // 앞에서 체육복이 있고 뒷사람이 체육복이 없는 경우
            if(allList[idx+1] === 0){
                allList[idx]--;
                allList[idx+1]++;
            }
        }else if(i===0){
            // 앞에서 체육복이 없고 뒷 사람이 체육복이 있는 경우
            if(allList[idx+1] === 2){
                allList[idx]++;
                allList[idx+1]--;
            }
        }
    })
    
    return allList.filter(i => i>0).length;
}