const hamburger = document.querySelector(".hamburger");
const navlinks__container = document.querySelector(".navlinks__container");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navlinks__container.classList.toggle("active");
})


document.querySelectorAll(".navlinks__container").forEach( n => n.addEventListener("click",() => {
    hamburger.classList.remove("active");
    navlinks__container.classList.remove("active");
}))
    
