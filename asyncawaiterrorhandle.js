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
            reject(filename);
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
async function processing(){
    try{
    let downloadfile=await fetch("www.google.com");
 
    let File= await writeFile(downloadfile);
   
    let uploadRespose1=await uploaddata(File,"www.drive.google.com"); 
    return uploadRespose1;
    }
    catch(error){
        console.log(error);

    }
}
console.log('start');
processing();
console.log('end');