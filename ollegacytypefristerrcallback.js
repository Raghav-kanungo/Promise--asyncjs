function downloadfile(url,fn)
{
    console.log('download stated',url);
    setTimeout(function process(){
        console.log('download completed');
        let response='dummy data';
        fn({error: "some error" },response);
    },3000);
}
downloadfile("www.google.com",function(error,ressponse){
    if(error){
        console.log('error is',error);
        return;
    }
    console.log('response is',ressponse);
})

