const solution = (phone_book) => {
  let result = true;
  // phone_book = phone_book.map(i=>parseInt(i)).sort((a,b) => (a-b)).map(i=>String(i));
  // const book = phone_book.map(i=>parseInt(i)).sort().map(i=>String(i));
    const book = phone_book.sort();
  // let i = 0;
  
  // for(let i = 0 ; i < book.length; i++){
  // while(phone_book.length < 1){
      
      // let str = book[i];
      // let myReg = new RegExp(phone_book[i],'g')
      // if(phone_book.filter((i) => myReg.test(i)).length > 1){
      // if(book.filter((i) => i.startsWith(str)).length !== 1){
      //     result = false;
      //     break;
      // }
      // phone_book.splice(i,1);
      // i++;
  // }
    
    if(book.some((i,idx,self) => self[idx+1]?.indexOf(i)===0)){
        result = false;
    };
  return result;
}