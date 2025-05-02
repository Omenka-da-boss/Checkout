let iconCart = document.querySelector(".iconcart")
let cart = document.querySelector(".cart")
let container = document.querySelector(".container")
let close = document.querySelector(".close")

iconCart.addEventListener("click",()=>{
    if(cart.style.right === "-100%"){
        cart.style.right = "0";
        container.style.transform = "translateX(-10px)"
    }
    else{
        cart.style.right = "-100%";
        container.style.transform = "translateX(0)"
    }
})
close.addEventListener("click",()=>{
     cart.style.right = "-100%";
        container.style.transform = "translateX(0)"
})
let product = null;

fetch('product.json')
.then(response => response.json())
.then(data => {
    product = data
    addDataToHTML()
})

function addDataToHTML(){
    let listProductHTML = document.querySelector(".listProduct")
    listProductHTML.innerHTML = ""
}
