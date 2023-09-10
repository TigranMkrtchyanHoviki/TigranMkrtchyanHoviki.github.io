let hover = document.querySelectorAll(".div_of_batinka")
let showDiscribtion = document.querySelectorAll(".div_for_discribtion_of_shoe")
 
hover.forEach((val, index) => {
    val.addEventListener("mouseenter", () => {
        console.log("eee")
        showDiscribtion[index].style.opacity = "1"
    })
})

hover.forEach((val, index) => {
    val.addEventListener("mouseleave", () => {
        console.log("eee")
        showDiscribtion[index].style.opacity = "0"
    })
})