function fetch (url){
    return new Promise(function(resolve,reject){
        console.log('downloading started from ',url);
        setTimeout(function processdownloading(){
            let data='dummy data';
            console.log('download completed');
            reject(data);
        },7000);
    });
}
let x=fetch("rjrhht");
x.then(function suxess(value){
    console.log("value is",value);
    return 10;
},function err(error){
    console.log('error is',error);
})
.then(function sucess1(v){
    console.log("value again is",v);
    throw{error:"new error"}
})
.catch(function errorHandle(error){
    console.log('error is ',error)
})
.finally(function finalstatement(){
    console.log('finally done');
}

)