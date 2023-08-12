// function dummyPromise(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('timers promise');
//         },0);
//     });
// }



console.log('start of the file');
setTimeout(function timer1(){
    console.log("timer1 done");
    let y=Promise.resolve('immediately resolved');
    y.then(function promiseY(value){
        console.log('whose promise ?',value);
    });
},0);

let x=Promise.resolve('sankets promise');
x.then(function processpromise(value){
    console.log('whose promise ?',value);
});
setTimeout(function timer2(){
    console.log("timer2 done");
},0);

console.log('end of the file');