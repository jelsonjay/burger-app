const hamburger = document.querySelector(".hamburger")
const links = document.querySelector(".links")

//=========HAMBURGER==========
hamburger.addEventListener("click", ()=>{
hamburger.classList.toggle("active")
links.classList.toggle("active")
})

window.onscroll = () => {
hamburger.classList.remove("active")
links.classList.remove("active")
}

//===================LOADING=====================
window.addEventListener("load", () => {
  
const loader = document.querySelector(".loader")
loader.classList.add("loader--active")
document.querySelector(".loader").addEventListener("transitionend" , () => {

  document.body.removeChild(document.querySelector(".loader"))
})
})



//=============JSON DATA===============

const screen = document.querySelector(".menu-container")
//const productImg = document.querySelector(".product-card-img > img")

const jsonFile = "./db.json"

fetch(jsonFile).then(res => {

  //console.log(res.json())

  return res.json()
}).then(data =>{
  data.map(product => {

  const {id, title, price, image} = product

  screen.innerHTML += `
    <div class="menu-box">
    <div class="menu-img">
    <img src=${image} alt="">
    </div>
    <h5>${title}</h5>
    <h6>${price}</h6>
    <div class="ratings">
    <a href="#"><i class='bx bxs-star'></i></a>
    <a href="#"><i class='bx bxs-star'></i></a>
    <a href="#"><i class='bx bxs-star'></i></a>
    <a href="#"><i class='bx bxs-star-half'></i></a>
    <a href="#"><i class='bx bxs-star-half'></i></a>
    </div>
    </div>

  `
  })

})