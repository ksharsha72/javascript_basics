const { read } = require('fs')

console.log("hello")

setTimeout(function(){
    console.log("I am inside timeout")
},10000)


const readline = require('readline').createInterface({input: process.stdin, output:process.stdout})

res = readline.question("Do you want to clear the timeout",(input) => {
    res = input
    readline.close()
    return res
    
})
