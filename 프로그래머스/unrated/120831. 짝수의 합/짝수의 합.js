
// const solution = (n) => {

//   let result = 0;
//   for(let i = 0 ; i <= n ; i = i+2 ){
//     result = result + i;
//   }

//   return result;
// }



// const solution = (n) => (Array(n).fill().map((_,i) => i+1).filter(item => item%2===0).reduce((a,b)=>(a+b),0));












// const solution = (n) => {
//     return new Array(n).fill(0).map((_,idx) => (idx+1)).filter(i => i%2===0).reduce((a,b) => (a+b),0);
// }








const solution = (n) => {
    let result = 0 ;
    for(let i = 0 ; i <= n ; i= i+2){
        result += i;
    }
    return result;
}


