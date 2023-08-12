function fetch(url){
    return new Promise(function(resolve,reject){
        console.log('going to start the download');
        setTimeout(function process(){
            let data='dummy downloadedd data';
            console.log('download completed');
            resolve(data);
        },10000);
        console.log('timer to mimic started');
    });
}
console.log('process starting');
console.log('we are expecting to mimic a downloader');
x=fetch('www.google.com');
console.log('new promie obj created sucesfully');