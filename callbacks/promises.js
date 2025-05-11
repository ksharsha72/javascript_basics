//promise, -> a promise of code execution
//solution to callback hell is promise , how??
//code executionn pass/fails, in both the case the subscriber gets noticed

//promise  --> state (fulllfilment, reject), result 

let promise = new Promise(function(resolve, reject){
    console.log("hello")
    resolve(56)
})
console.log("hello one")

setTimeout(function(){
    console.log("Hello in Two")
}, 2000)
console.log("Hello Three")
console.log(promise)

//fetch google.com homepage                  parallel excution required       //how can you do the parallel execution
//fetch data from dataapi                    parallel execution required
//fetch pictures from the server             parallel execution required
//print downloading
//rest of the code


//we can use callbacks, but promises is used for organization