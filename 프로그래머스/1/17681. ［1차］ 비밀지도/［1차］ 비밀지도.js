function solution(n, arr1, arr2) {
    arr1 = arr1.map((i) => {
        let str = i.toString(2);
        if(str.length < arr1.length ){
            return '0'.repeat(arr1.length - str.length)+str;
        }else{
            return str;
        }
    });
    arr2 = arr2.map((i) => {
        let str = i.toString(2);
        if(str.length < arr1.length ){
            return '0'.repeat(arr1.length - str.length)+str;
        }else{
            return str;
        }
    });
    
    return arr1.map((i,idx) =>  {
        let str = String(parseInt(i) + parseInt(arr2[idx]));
        if(str.length < arr1.length){
            str = '0'.repeat(arr1.length - str.length)+str;
            return str.split('').map((j) => parseInt(j)>0?'#':' ' ).join('');
        }else{
            return str.split('').map((j) => parseInt(j)>0?'#':' ' ).join('');
        }
    })
}