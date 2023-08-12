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
            console.log('uoload done');
            resolve(res);
        },5000);
    });
}
// let downloadpromise=fetch('ww.fvkvwgv..com');
// downloadpromise.then(function processdownload(value){
//     console.log('downlaod promise fulfilled');
//     let writePromise=writeFile(value);
//     writePromise.then(function processwrite(value){
//         console.log('writing done');
//         console.log('file name is ',value);
//     })
// })
let downloadpromise=fetch('ww.fvkvwgv..com');
downloadpromise
.then(function processdownload(value){
    console.log('downlaod promise fulfilled');
    return value;
})
.then(function procesWrite(value){
    return writeFile(value);

})
.then(function processUpload(value){
    return uploaddata(value,"www.drive.com")
})