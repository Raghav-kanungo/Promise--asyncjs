console.log('start of the file');
setTimeout(function timer1(){
    console.log("timer1 done");
},0);
for(let i=0;i<10000000000;i++){

}
let x=Promise.resolve('sankets promise');
x.then(function processpromise(value){
    console.log('whose promise ?',value);
});
setTimeout(function timer2(){
    console.log("timer2 done");
},0);

console.log('end of the file');