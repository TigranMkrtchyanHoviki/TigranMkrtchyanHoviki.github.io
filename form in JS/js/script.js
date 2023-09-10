let name = document.getElementById("name"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    
    icon = document.querySelector(".icon")
    
//     showPasswordBtn = document.querySelectorAll(".div_icon")

// console.log(showPasswordBtn[0].firstElementChild.before)

let chekName = false

// ՍԿԻԶԲ - Ֆունկցիա submit կոճակի համար

function send() {

    if (name.value === "") {
        alert("Լրացրեք անվան դաշտը")

    } else {
        chekName = true
    }

    checkEmail() // ԿԱՆՉՈՒՄ ԵՆՔ ֆունկցիան email-ի դաշտի համար

    chekPassword () // ԿԱՆՉՈՒՄ ԵՆՔ ֆունկցիան password-ի դաշտի համար
}

// ԱՎԱՐՏ - Ֆունկցիա submit կոճակի համար

// ՍԿԻԶԲ - Ֆունկցիա Email դաշտի համար

function checkEmail() {

    if (chekName) {

        if (email.value === "") {
            alert("Գրեք ձեր mail-ը")
        }else {

                if (!email.value.includes("@")) {
                    alert("Email դաշտում Դուք բաց եք թողել \"@\" նշանը")
                    password.value = ""
                }else if (email.value.includes("@") && email.value[email.value.length - 1] === "@") {
                    alert("Email դաշտում Դուք \"@\"-ից հետք բաց եք թողել email- դոմեյնը")
                    password.value = ""
                }

        }

    }
}

// ԱՎԱՐՏ - Ֆունկցիա Email դաշտի համար

// ՍԿԻԶԲ - Ֆունկցիա password դաշտի համար

function chekPassword () {

    let symbols = "~`!@#$%^&*()_-+=|}]{[':;?/>.<, " // փոփոխական, որի մեջ պահվում է hամահարգչի ստեղնաշարի սիմվոլները, որոնց հետ պետք է համեմատել password-ի նիշերը 
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdifghijklmnopqrstuvwxyz" // փոփոխական, որի մեջ պահվում է hամահարգչի ստեղնաշարի մեծատառերն ու փոքրատառերը, որոնց հետ պետք է համեմատել password-ի նիշերը
    
    if(name.value !== "" && email.value !== "" && email.value.includes("@") && email.value[email.value.length - 1] !== "@"){

           let number = "" // փոփոխական password-ի մեջ թվերի առկայությունը ստուգելու համար
           let char = "" // փոփոխական password-ի մեջ տառերի առկայությունը ստուգելու համար
           let symbol = "" // փոփոխական password-ի մեջ սիմվոլների առկայությունը ստուգելու համար
       
           for(i = 0; i < password.value.length; i++){
               
               let val = password.value[i]
            
               if(chars.includes(val)) {
                   char += val
               }else if (symbols.includes(val)) {
                   symbol += val
               }else {
                   number += val
               }
       
           }
       
           if(!number && !char && !symbol){
               alert("Լրացրեք password-ի դաշտը")
           }else if(!number || !char || !symbol) {
               alert("Ձեր password-ը _պետք է ունենա տառեր, թվեր և սիմվոլներ")
               password.value = ""
           }
   }
}

// ԱՎԱՐՏ - Ֆունկցիա password դաշտի համար

// ՍԿԻԶԲ - ֆունկցիա password-ը տեսանելի դարձնելու և նորից ծածկելու համար

function showPassword () {

    let showPass = document.querySelector(".div_clear") // ստանում ենք այն էլեմենտը, որը password-ի աչքի վրա գիծ է քաշում

    if(password.type === "password" && password.value){
       password.type = "text"
       showPass.style.opacity = "0"
    }else {
        password.type = "password"
        showPass.style.opacity = "1"
    }

}

// ԱՎԱՐՏ - ֆունկցիա password-ը տեսանելի դարձնելու և նորից ծածկելու համար