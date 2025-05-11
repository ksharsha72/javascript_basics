
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

function goodMorning(error,src){
    if(error){
        console.log(error)
        return
    }
    alert("goodMorning!" + src)
}

//callback based style of asynchronous programming
 //inversion of control
//goodmorning is passed as it is , and we can do what ever we want with that fucntion

// loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js", goodMorning)


// pyramid of dooms, callbacks insided call backs, to handle this use promise
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js", function goodMorning(error,src){
    if(error){
        console.log(error)
        return
    }

    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap2.bundle.min.js",function goodMorning(error,src){
        if(error){
            console.log(error)
            return
        }
        
        loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap3.bundle.min.js",function goodMorning(error,src){
            if(error){
                console.log(error)
                return
            }
            
            loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap4.bundle.min.js",function goodMorning(error,src){
                if(error){
                    console.log(error)
                    return
                } 

                loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap5.bundle.min.js",function goodMorning(error,src){
                    if(error){
                        console.log(error)
                        return
                    } 

                    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap6.bundle.min.js",function goodMorning(error,src){
                        if(error){
                            console.log(error)
                            return
                        } 

                        loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap7.bundle.min.js",function goodMorning(error,src){
                            if(error){
                                console.log(error)
                                return
                            } 

                            loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap8.bundle.min.js",function goodMorning(error,src){
                                if(error){
                                    console.log(error)
                                    return
                                } 
                        
                                
                            } )
                    
                            
                        } )
                
                        
                    } )
            
                    
                } )
        
                
            } )
    
            
        } )


    } )

})