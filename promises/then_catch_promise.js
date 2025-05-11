//promise, let the function execute asynchronously

let  p = new Promise((resolve, reject)=>{
    //what ever code written here will be executed in background, and notifies through .then() and .catch()
    console.log("promise is pending")
    setTimeout(()=>{
        // console.log("i am promise and i am rejected")
        resolve(true)
        // reject(new Error("I am new error"))
    }, 5000)
})

let  p2 = new Promise((resolve, reject)=>{
    //what ever code written here will be executed in background, and notifies through .then() and .catch()
    // console.log("promise2 is pending")
    setTimeout(()=>{
        // console.log("i am promise and i am fullfilled")
        // resolve(true)
        reject(new Error("I am new error"))
    }, 5000)
})

// console.log(p)
// console.log(p2)

p.then((value) => {
    console.log(value)
})

p2.catch((error) => {
    console.log("some error has been occured")
})

p2.then((value) => {
    console.log(succes)
}, (error) => {
    console.log("the error has been encountered")
})