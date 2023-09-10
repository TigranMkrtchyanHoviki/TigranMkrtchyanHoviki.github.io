let password = document.getElementById("password"),
chekConditions = document.querySelectorAll(".icone")
hiddenPassword = document.getElementById("hidden_password"),
eye = document.getElementById("eye"),

passwordValue = null

symbolCheck = false
numberCheck = false
lowerCheck = false
upperCheck = false

console.dir(password.type)

check = document.querySelectorAll(".ckeck")

// console.log(check)
console.log(chekConditions)
// checkBox = document.createElement("i")
// checkBox.classList.add("fa-solid")
// checkBox.classList.add("fa-check")

lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", 
                 "s", "t", "u", "v", "w", "x", "y", "z", ],

upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
                 "S", "T", "U", "V", "W", "X", "Y", "Z", ],

number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ],

symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "~" ]

password.addEventListener("input", function () {
    passwordValue = this.value.split("")

    console.log("passwordValue", passwordValue)

    if(passwordValue.length !== 0) {

        for(let i = 0; i < passwordValue.length; i++) {
            if(number.includes(passwordValue[i])){
                numberCheck = true
                break
            }else {
                numberCheck = false
            }
        }

        for(let i = 0; i < passwordValue.length; i++) {
            if(lowerCase.includes(passwordValue[i])){
                lowerCheck = true
                break
            }else {
                lowerCheck = false
            }
        }

        for(let i = 0; i < passwordValue.length; i++) {
            if(symbol.includes(passwordValue[i])){
                symbolCheck = true
                break
            }else {
                symbolCheck = false
            }
        }

        for(let i = 0; i < passwordValue.length; i++) {
            if(upperCase.includes(passwordValue[i])){
                upperCheck = true
                break
            }else {
                upperCheck = false
            }
        }

        if(numberCheck) {
            chekConditions[1].style.display = "none"
            check[1].style.color = "#108fff"
            check[1].style.marginRight = "20px"
            check[1].style.display = "block"
        }else {
            check[1].style.display = "none"
            chekConditions[1].style.color = "#9c9c9c"
            chekConditions[1].style.marginRight = "20px"
            chekConditions[1].style.display = "block"
        }

        if(lowerCheck) {
            chekConditions[2].style.display = "none"
            check[2].style.color = "#108fff"
            check[2].style.marginRight = "20px"
            check[2].style.display = "block"
        }else {
            check[2].style.display = "none"
            chekConditions[2].style.color = "#9c9c9c"
            chekConditions[2].style.marginRight = "20px"
            chekConditions[2].style.display = "block"
        }

        if(symbolCheck) {
            chekConditions[3].style.display = "none"
            check[3].style.color = "#108fff"
            check[3].style.marginRight = "20px"
            check[3].style.display = "block"
        }else {
            check[3].style.display = "none"
            chekConditions[3].style.color = "#9c9c9c"
            chekConditions[3].style.marginRight = "20px"
            chekConditions[3].style.display = "block"
        }

        if(upperCheck) {
            chekConditions[4].style.display = "none"
            check[4].style.color = "#108fff"
            check[4].style.marginRight = "20px"
            check[4].style.display = "block"
        }else {
            check[4].style.display = "none"
            chekConditions[4].style.color = "#9c9c9c"
            chekConditions[4].style.marginRight = "20px"
            chekConditions[4].style.display = "block"
        }

    if(this.value.length >= 8) {
            chekConditions[0].style.display = "none"
            check[0].style.color = "#108fff"
            check[0].style.marginRight = "20px"
            check[0].style.display = "block"
    }else {
        check[0].style.display = "none"
        chekConditions[0].style.color = "#9c9c9c"
        chekConditions[0].style.marginRight = "20px"
        chekConditions[0].style.display = "block"
    }

  }else {
        chekConditions.forEach((val, index) => {
            check[index].style.display = "none"
            chekConditions[index].style.color = "#9c9c9c"
            chekConditions[index].style.marginRight = "20px"
            chekConditions[index].style.display = "block"
        })
  }
})

eye.addEventListener("click", function () {
    
    if( password.type === "password") {
        hiddenPassword.style.display = "block"
        password.type = "text"
    }else if(hiddenPassword.style.display === "block"){
        hiddenPassword.style.display = "none"
        password.type = "password"
    }
})

