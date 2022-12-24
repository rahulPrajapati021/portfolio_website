let bars = document.querySelector(".bars");
let bar = document.querySelectorAll(".bar");
let smallNav = document.querySelector(".navContainer_smallScreen");

bars.addEventListener("click", () => {
    if (smallNav.style.height == "0px" || smallNav.style.height == 0) {
        smallNav.style.height = smallNav.scrollHeight + "px";
    }
    else {
        smallNav.style.height = 0;
    }
    bar.forEach((e) => {
        e.classList.toggle("singleBar")
    })
})