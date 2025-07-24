const toggleMode = (event) => {
    event.preventDefault()
    const test = document.getElementById("abcd1234")
    
    if(test.value=="dark"){
        console.log(test.value)
        test.innerHTML=`<input id="abcd1234" onclick=toggleMode(event) type="checkbox" class="theme-controller" value="dark" />`
    }
    else{
        console.log("white")
    }
}
