console.log("Ajax one word tutorial 1")

let fetchBtn = document.getElementById('fetchBtn')
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log("you have clicked fetchBtn")
    const xhr  = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1', true)

    //what do on progress

    xhr.onprogress = function(){
        console.log("on progress")
    }

    xhr.onreadystatechange = function(){
        console.log("the ready state is", xhr.readyState)
    }

    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText)
        }
        else{
            console.log("some error occured")
        }
        
        
    }

    xhr.send()

    console.log("we are done")
    
    

}