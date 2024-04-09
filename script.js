let toggleBtn = document.querySelector(".toggle-btn");
let sideNav = document.querySelector(".side-nav");
toggleBtn.addEventListener('click',()=>{
    sideNav.style.display = "block";
})
document.querySelector(".side-nav span").addEventListener('click',()=>{
    sideNav.style.display = "none";
})


let highlightsbtn = document.querySelector(".highlights-nav");
let descriptionbtn = document.querySelector(".description-nav");
let gallerybtn = document.querySelector(".gallery-nav");

let highlights = document.querySelector(".highlights");
let description = document.querySelector(".description");
let gallery = document.querySelector(".gallery");
if (highlights) {
    highlightsbtn.addEventListener('click',()=>{
        highlights.style.display = "flex";
        description.style.display = "none";
        gallery.style.display = "none";
    })
}

if (description) {
    descriptionbtn.addEventListener('click',()=>{
        description.style.display = "flex";
        highlights.style.display = "none";
        gallery.style.display = "none";
    })
}

if (gallery) {
    gallerybtn.addEventListener("click",()=>{
        gallery.style.display = "flex";
        description.style.display = "none";
        highlights.style.display = "none";
    })
}

 document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".highlightable");
        function removeHighlight() {
        buttons.forEach(btn => {
            btn.classList.remove("highlighted");
        });
    }
        buttons.forEach(button => {
        button.addEventListener("click", function() {
            removeHighlight();
            this.classList.add("highlighted");
        });
    });
    buttons[0].classList.add("highlighted");
});



let getBtn = document.querySelector(".get-started-btn");
let backdrop = document.querySelector(".backdrop");
let form = document.querySelector(".form-container");
let closeBtn = document.querySelector(".close");
if(getBtn){
getBtn.addEventListener('click',()=>{
    backdrop.style.display = "block";
    form.style.display = "block";
})}
if(closeBtn){
closeBtn.addEventListener('click',()=>{
    backdrop.style.display = "none";
    form.style.display = "none";
})}

const initSlider = () => {
    const imageList = document.querySelector(".slides");
    const slideButtons = document.querySelectorAll(".slide-button");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth / 2;
            const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
            if (direction === -1 && imageList.scrollLeft <= 0) {
                imageList.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
            } else if (direction === 1 && imageList.scrollLeft + scrollAmount >= maxScrollLeft) {
                imageList.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                imageList.scrollBy({ left: scrollAmount * direction, behavior: "smooth" });
            }
        });
    });
};
window.addEventListener("resize", initSlider);
initSlider();
