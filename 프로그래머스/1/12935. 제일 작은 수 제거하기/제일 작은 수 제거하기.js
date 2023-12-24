function solution(arr) {
    
    const arr01 = [...arr].sort((a,b) => (a-b));

    
    return arr.length==1?[-1]:arr.filter(i => i!==arr01[0]);;
    
}