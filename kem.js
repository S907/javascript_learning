
// function loadScript(src, callback){
//     let script = document.createElement('sricpt');
//     script.src= src;
//     script.onload=()=> callback(script);
// }

 function loadScript(src, callback){
    let script= document.createElement('script');
    script.src= src;
    script.onload=()=>callback(null, script);
    script.onerror=()=>callback(new Error(`Script error for ${src}`));
    document.head.append(script)
}

