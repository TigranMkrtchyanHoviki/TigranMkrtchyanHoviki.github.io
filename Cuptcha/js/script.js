let input = document.querySelector(".input-area input"),
ckeckBtn = document.querySelector(".input-area button"),
captcha = document.querySelector(".captcha"),
reloadBtn = document.querySelector(".reload-btn"),
statusText = document.querySelector(".status-text"),
form = document.querySelector(".input-area"),

actionOfForm = form.action

console.log(form)
console.log(actionOfForm)

let data = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
            "0", "1", "2", "3", "4", '5', "6", "7", "8", "9" ]

reloadBtn.addEventListener("click", function () {
    
    let index1 = data[Math.floor(Math.random() * 61)],
    index2 = data[Math.floor(Math.random() * 61)],
    index3 = data[Math.floor(Math.random() * 61)],
    index4 = data[Math.floor(Math.random() * 61)],
    index5 = data[Math.floor(Math.random() * 61)],
    index6 = data[Math.floor(Math.random() * 61)]

    captcha.innerHTML = index1 + index2 + index3 + index4 + index5 + index6

    statusText.innerHTML = ""
    statusText.style.display = "none"
    input.value = ""
})

input.addEventListener("click", function () {
    ckeckBtn.style.opacity = "1"
})

ckeckBtn.addEventListener("click", function () {
    let captchText = captcha.innerHTML.split("").join(" "),
    checkText = input.value.split("").join(" ")
    console.log(actionOfForm)


    // console.log(captchText)
    // console.log(checkText)

    if(captchText === checkText) {
        form.action = actionOfForm
        // form.action = "#"
        console.log(form.action)
        console.log(form)
    }else {
        console.log(false)
        console.log(form)
        form.action = ""
        statusText.innerHTML = "Captcha not matched. Please try agine!"
        statusText.style.display = "block"
        statusText.style.color = `rgb(${255}, ${0}, ${0})`
        captcha.innerHTML = ""
        input.value = ""
    }

})