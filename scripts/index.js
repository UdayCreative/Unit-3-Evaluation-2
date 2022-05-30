// Add the coffee to local storage with key "coffee"
// async function getData(){
//     let url = "https://masai-mock-api.herokuapp.com/coffee/menu"
//     let res = await fetch(url)
//     let cartCoffee = await res.json()
//     console.log(cartCoffee.menu.data)
// }
//  getData

//  let data = JSON.parse(localStorage.getItem("coffee")) ||
 
//  function append(data){

//     data.forEach(function(elem,index){
//         let div = document.createElement("div")
//         div.setAttribute("class","wrapper")

//         let img = document.createElement('img')
//         img.src=elem.image

//         let div1 = document.createElement("div")
//         div1.setAttribute("class","infoDiv")

//         let h2 = document.createElement("h2")
//         h2.innerText = elem.title

//         let p =document.createElement("p")
//         p.innerText="Price: ${elem.price}"

//         let button = document.createElement("button")
//         button.setAttribute("id","add_to_bucket")
        
//         button.addEventListener("click",function(){
//             addToBucket(elem,index)
//         })
//         div1.append(h2,p,button)
//         div.append(img,div1)

//         document.querySelector("menu").append("div")
//     })
//  }
//  function addToBucket(elem,index){

//  }

const url ="https://masai-mock-api.herokuapp.com/coffee/menu"
fetch(url).then(function(res){
    return res.json()
})

.then(function(data){
    menu(data.menu.data)
    console.log(data.menu.data)
})
var coffee = JSON.parse(localStorage.getItem("coffee")) 

if(coffee!=null){
    document.querySelector("#coffee_count").innerHTML=coffee.length
}
else{
    document.querySelector("#coffee_count").innerText=0
}

function  menu(data){
    data.map(function(elem){
        let div = document.createElement("div")
        let name = document.createElement("p")
        let price = document.createElement("p")
        let image = document.createElement("img")
        let button = document.createElement("button")
        button.innerText="Add To Bucket"
        button.addEventListener("click",function(){
            cart(elem)
        })
        name.innerText= elem.title
        price.innerText= elem.price
        image.src=elem.image
        div.append(image,name,price,button)
        document.querySelector("#menu").append(div)
    })
}

let arr = JSON.parse(localStorage.getItem("coffee")) || []

function cart(elem){
    arr.push(elem)

    localStorage.setItem("coffee",JSON.stringify(arr))
     
    var coffee = JSON.parse(localStorage.getItem("coffee"))

    document.querySelector("#coffee_count").innerText=coffee.length
}
