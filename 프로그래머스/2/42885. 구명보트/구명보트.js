function solution(people, limit) {
    people.sort((a,b) => (a-b));
    
    let count = people.length;
    
    let i = 0;
    let j = people.length-1;
    
    while(i < j){
        if(people[i]+people[j] <= limit){
            count--;
            i++;
            j--;
        }else{
            j--;
        }
    }
    return count;
}