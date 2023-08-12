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
function writeFile(data){
    return new Promise(function(resolve,reject){
        console.log('started writing', data,'in a file');
        setTimeout(function processwriting(){
            let filename='result.txt';
            console.log('file written sucessfully');
            resolve(filename);
        },3000);
    });
}
function uploaddata(file,url){
    return new Promise(function(resolve,reject){
        console.log('uploaded started on url', url,'filename is',file);
        setTimeout(function processUpload(){
            let res='sucess';
            console.log('upload done');
            resolve(res);
        },5000);
    });
}
let downlooadPromise=fetch('www.drive1.google.com');
let writePromise=writeFile('dummy data');
let uploadPromise=uploaddata('test.txt',"drive.google.com");

console.log('start') ;
Promise.all( [downlooadPromise,writePromise,uploadPromise]).then(function process(value){
    console.log(value);
})