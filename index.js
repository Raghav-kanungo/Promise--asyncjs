function downloadfile(url,fn)
{
    console.log('download stated',url);
    setTimeout(function process(){
        console.log('download completed');
        let response='dummy data';
        fn(response);
    },3000);
}
function writefile(data,fn){
    console.log('writing data',data);
    setTimeout(function process(){
        console.log('writing completeed');
        let filename='output.txt';
        fn(filename);
    },4000)
}
function uploadFile(filename,newurl,fn){
    console.log('uploading start');
    setTimeout(function process(){
        console.log('file',filename,'uploading done',newurl);
        let uploadresonse="sucess";
        fn(uploadresonse);
    },7000);
}
downloadfile('www.google.com',function processs(response){
console.log('downloaded data is',response);
writefile(response,function writedone(newfileresponse){
    console.log('new file written is',newfileresponse);
    uploadFile(newfileresponse,"www.googledrive.com",function uploadedsucess(newfileuplod){
        console.log(newfileuplod);
    })
})
});
