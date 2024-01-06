function solution(people, limit) {
    people.sort((a,b) => (a-b));
    
    let count = people.length;
    // 틀렸던 코드
    // let count = 0;
    
    let i = 0;
    let j = people.length-1;
    
    while(i < j){
        if(people[i]+people[j] <= limit){
            count--;
            // 틀렸던 코드
            // count++;
            i++;
            j--;
        }else{
            // 틀렸던 코드
            // count++;
            j--;
        }
    }
    return count;
}