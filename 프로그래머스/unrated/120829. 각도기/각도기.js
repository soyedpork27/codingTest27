

const solution = (angle) => ([0,90,91,180].filter(i => i <= angle).length);







// const solution = (angle) => {
//     if(0 < angle && angle < 90){
//         return 1;
//     }else if(angle===90){
//         return 2;
//     }else if(90 < angle && angle < 180){
//         return 3;
//     }else if(angle===180){
//         return 4;
//     }
// }

// function solution(angle) {
//     return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
// }

// const solution = (angle) => {
//   return  [0,90,91,180].filter(item => angle >= item).length;
// }



// const solution = (angle) => {
//     return [0,90,91,180].filter((i) => i<=angle).length;
// }