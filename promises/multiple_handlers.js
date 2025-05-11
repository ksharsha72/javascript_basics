let  p1 = new Promise((resolve, reject)=>{
    console.log("i am not resolved")
    setTimeout(()=>{
        resolve(1)

    },2000)
})


//do both the .then run ??  it is not same as promise chaining
p1.then(()=>{
    console.log("i have been resolved")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(4)
        })
    })
}).then((value)=>{
    console.log(value)
})

p1.then(()=>{
    console.log("hurray")
})