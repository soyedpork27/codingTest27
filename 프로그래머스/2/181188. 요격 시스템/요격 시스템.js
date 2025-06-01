const solution = (targets) => {

  // 초기값 무조건 1
  let result = 1;

  // 타겟을 시작지점을 중심으로 정렬
  targets.sort((a, b) => (a[1]-b[1]));

  // 발사지점을 설정
  let firePoint = targets[0][1];

  for(let i = 0 ; i < targets.length ; i++){
    let newMissle = targets[i];

    if(newMissle[0] < firePoint){

      // 발사지점이 다른 미사일을 포함한다면
      continue;
    }

    // 여기부턴 포함하지 않으니 새로운 미사일로 발사지점을 정한다.
    firePoint = newMissle[1];

    result++; 
  }

  // 결과 제출
  return result;

}