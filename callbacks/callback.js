function loadscript(src, callback){
    var script = document.createElement("script")
    script.src = src
    script.onload = function(){
        console.log("loaded script with src" + src)
        callback(null,src)  //here is where call back happens
    }
    script.onerror = function(){
        console.log("error loading the script")
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script)
}

function hello(error,src){
    if(error){
        console.log(error)
        return
    }
    alert("hello world!" + src)
}

//callback based style of asynchronous programming
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js", hello)






