function solution(id_list, report, k) {
    
    const obj = {};
    
    id_list.forEach((i) => {
       obj[i] = [];
    });
    
    report.forEach((i) => {
       i = i.split(' ');
            
        obj[i[1]].push(i[0]);
    });
    
    const obj2 = {};
    
    id_list.forEach((i) => {
       obj2[i] = 0;
    });

    id_list.forEach((i) => {
        // Set을 활용해 중복 제거
        obj[i] = Array(...new Set([...obj[i]]));
        
        if(obj[i].length >= k){
            obj[i].forEach(j => {
                obj2[j]++;
            });
        }
    });

    return Object.values(obj2);
}