// let p1 =  new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("resolved after 2 seconds")
//         resolve(56)
//     }, 2000)
// })

// p1.then((value) => {
//     console.log(value)
//     let p2 = new Promise((resolve, reject) =>{
//         console.log("return promise 2")
//         setTimeout(()=>{resolve("promise 2")}, 2000)
        
//     })
//     return p2
// }).then((value) =>{
//     console.log("we are done")
//     return 2
// }).then((value) => {console.log("finally we are done")})


const loadScript = (src) =>{
    return new Promise((resolve, reject) => {

        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = (script) => {
            resolve("script has been loaded sir")
        }

        script.onerror = () =>{
            reject(0)
        }
        
    })
    
}

p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js")

p1.then((value)=>{
    console.log(value)
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
    console.log("the secondary script has been loaded")
}).catch((error)=>{
    console.log("we caught the error")
})