console.log("This is t34 for asynchronous programming")

setTimeout(() => {
    for(let index=0; index < 45; index++){
    const element = index
    console.log("this is index number " + index)
    }
}, 100)

console.log("done printing")