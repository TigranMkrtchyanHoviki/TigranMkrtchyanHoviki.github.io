const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav")

const frontendDeveleoper = document.querySelector(".frontend_developer")
const frontend = document.querySelector(".frontend")
const developer = document.querySelector(".developer")

const anchors = document.querySelectorAll('a[href*="#"]')

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
      nav.classList.toggle("open")
})

frontendDeveleoper.addEventListener("mouseenter", () => {
   frontend.classList.add("replace_frontend")
   developer.classList.add("replace_developer")
})

frontendDeveleoper.addEventListener("mouseleave", () => {
  frontend.classList.remove("replace_frontend")
  developer.classList.remove("replace_developer")
})

// nav-ի վրա click անելու դեպքում պետք ա պլավնի գնա էջի համապատասխան բաժին

anchors.forEach((anchor) => {
  
  anchor.addEventListener("click", function (event) {
      
    event.preventDefault()

    if(nav.classList.contains("open")) {
      nav.classList.remove("open")
      burger.classList.remove("active")
    }
    
    const blockId = anchor.getAttribute("href")
    
      document.querySelector("" + blockId).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })

  })
})