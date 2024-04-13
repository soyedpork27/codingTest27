function solution(board, moves) {
    let answer = 0;
    
    const stack = [];
    
    const board01 = [];
    
    for(let i = 0 ; i < board[0].length ; i++){

        const arr = [];
        
        for(let j = 0 ; j < board.length ; j++){
            
            arr.push(board[j][i]);
            
        }
        board01.push(arr);
        
    }

    
    moves.forEach((i) => {
        const idx = i-1;
        
        for(let j = 0 ; j < board01[0].length ; j++){
            if(board01[idx][j]===0){
                continue;
            }else{
                stack.push(board01[idx][j]);
                board01[idx][j]=0;
                break;
            }
        }
        
    });
    let ctn = 0;
    
    
    let index = 1;
    while(true){
        if(stack[index]===stack[index-1]){
            ctn = ctn+2;
            stack.splice(index-1,2);
            // stack[index] = 0;
            // stack[index-1] = 0;
            index = index-1;
        }else{
            index = index+1;
        }
        if(index>=stack.length){
            break;
        }
    }
    
    // console.log(stack);
    // console.log(ctn);
    
    
    return ctn;
}