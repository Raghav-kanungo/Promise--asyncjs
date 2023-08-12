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
// async function processing(){
    
    
    
//     return uploadRespose1+uploadRespose2+uploadRespose3;
// }
async function process1(){
    let downloadfile=await fetch("www.google.com");
 
    let File= await writeFile(downloadfile);
   
    let uploadRespose1=await uploaddata(File,"www.drive.google.com"); 
    return uploadRespose1;
}
async function process2(){
    let downloadfile1=await fetch("www.google.com");
    let File1=await writeFile(downloadfile1);
    let uploadRespose2=await uploaddata(File1,"www.ondrive.com");
    return uploadRespose2;
}
async function process3(){
    let downloadfile2=await fetch("www.google.com");
    let File2=await writeFile(downloadfile2);
    let uploadRespose3=await uploaddata(File2,"www.metabase.com");
    return uploadRespose3;
}



console.log('start') ;
Promise.all( [process1(),process2(),process3()]).then(function process(value){
    console.log(value);
})