//special syntax to work with promises
// we can make any function async, and make a promise await in that fucntion
//async fucntion always returns a promise, and make sure promise wraps non promises


async function harry(){
        let hup_weather = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve("27 deg")
            },2000)
        })

        let banglore_weather = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve("21 deg")
            },3000)
        })

        hup_weather.then((value)=>{
                console.log(value)
        })

        banglore_weather.then((value)=>{
            console.log(value)
    })


    let hupw = await hup_weather
    let banglorew = await banglore_weather
    return [hupw, banglorew]
}

const cherry = () => {
    console.log("i am cherry i am not waiting")
}

// async function harry(){
//     return 5
// }

// harry().then((x) => {
//     console.log(x)
// })

let a = harry()
let b = cherry()
console.log(a)
