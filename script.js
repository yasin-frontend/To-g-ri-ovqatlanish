let links = document.querySelector(".links")
let list = document.querySelector(".list")
let trueFalse = true
list.addEventListener("click", ()=>{
        if (trueFalse) {
                links.classList.add("linksNew")
                trueFalse =false       
        } else {
                links.classList.remove("linksNew")
                trueFalse = true
        }
})      
