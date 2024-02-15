

const menuOptions = document.querySelectorAll("div.hidden")
const menuContainer = document.getElementById("menuContainer")
const menu = document.getElementById("menu")
let i = 0
const changeToVisible = () => {
    menuOptions.forEach((element) => {
     element.className = "visible" 
    }
     )
}
     const changeToHidden = () => {
        menuOptions.forEach((element) => {
         element.className = "hidden" 
        }
         )

}
menu.addEventListener("mouseover", () => {
    changeToVisible()
})


menuContainer.addEventListener("mouseleave", () => {
    changeToHidden()
})






const turnCarousel = () => {
        console.log("hI 5 seconds")
    const imgs = Array.from(document.querySelectorAll("img"))

imgs.forEach((img) => {
    img.style.order = "0"

    img.id = "inactiveCarousel"
    
})

        imgs[i].id = "activeCarousel"
        document.getElementById("activeCarousel").style.order = "-1";

    const myTimeout = setTimeout(turnCarousel, 5000);


i+= 1
   
}
turnCarousel()

function myStopFunction() {
    clearTimeout(myTimeout);
  }
  