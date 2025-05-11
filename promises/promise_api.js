let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(1)
    },1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(2)
        // reject(new Error("there has been error"))
    },2000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(3)
    },3000)
})


// let promise_all = Promise.all([p1,p2,p3])
// let promise_all = Promise.allSettled([p1,p2,p3])
// let promise_all = Promise.race([p1,p2,p3])
// let promise_all = Promise.any([p1,p2,p3])
// let promise_all = Promise.resolve(6)
promise_all.then((value)=>{
    console.log(value)
})
// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })

// p3.then((value)=>{
//     console.log(value)
// })






