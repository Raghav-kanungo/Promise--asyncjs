function fetch (url){
    return new Promise(function(resolve,reject){
        console.log('downloading started from ',url);
        setTimeout(function processdownloading(){
            let data='dummy data';
            console.log('download completed');
            resolve(data);
        },7000);
    });
}
async function processing(){
    console.log('entering processing');
    let value1=await fetch("www.youtube.com");
    console.log('youtube downloading  await complete');
    let value2=await fetch("www.google.com");
    console.log('google downloading  await complete');
    console.log('exiting processing');
    return value1+value2;
}
console.log('start');
setTimeout(function timer(){
    console.log('timer 1')
},0);
console.log('seeing timer 1');
let x=processing();
x.then(function (value){
    console.log('final processing promise resolves with',value);
});
setTimeout(function timer2(){console.log('timer 2')},1000);
setTimeout(function timer3(){console.log('timer 3')},0);