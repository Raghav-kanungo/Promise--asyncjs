// // function fecth(url){
// //     return new Promise(function(resolve,reject){
// //         //any logic
// //         for(let i=0;i<10000000000;i++){
// //             //some task
// //         }
// //         console.log('complted');
// //         resolve('sanket');
// //     });
// // }
// // let x=fecth('www.graphy.com');
// console.log(x);
function demo1(val){
    return new Promise(function(resolve,reject){
        console.log('start');
        setTimeout(function process(){
            console.log('completed timer');
            if(val%2==0){
                resolve('even');
            }
            else{
                reject('error');
            }
        },10000);
        console.log('somewhere');
    });
}
let s=demo1(4);
console.log(s);

