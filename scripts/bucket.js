// On clicking remove button the item should be removed from DOM as well as localstorage.
var data = JSON.parse(localStorage.getItem("coffee")) || []
function check(data){
    document.querySelector("#bucket").innerHTML=null
    
    var sum = 0
    data.map(function(elem,index){
        let div = document.createElement("div")
        let name = document.createElement("p")
        let price = document.createElement("p")
        let image = document.createElement("img")
        let button = document.createElement("button")
        button.innerText="remove"
        button.addEventListener("click",function(){
            remove(elem,index)
        })
        name.innerText= elem.title
        price.innerText= elem.price
        sum=sum+eval(elem,index)
        image.src=elem.image
        div.append(image,name,price,button)
        document.querySelector("#bucket").append(div)
        document.querySelector("#total_amount")
    })
}
check(data)
function remove(elem,index){
    var data = JSON.parse(localStorage.getItem("coffee"))
    data.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(data))
    window.location.reload()
}
