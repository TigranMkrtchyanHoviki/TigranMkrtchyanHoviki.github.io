let payment = document.getElementById("payment"),
waiter = document.getElementById("waiter"),
rating = document.getElementById("rating"),
textCalculateOfTip = document.querySelector(".text_calculate_of_tip"),
result = document.querySelector(".result"),
select = document.getElementById("select"),
divResult = document.querySelector(".div_result"),
calcButton = document.getElementById("btn")

payment.addEventListener("click", function () {
    textCalculateOfTip.style.display = "block"
    setTimeout(() => {
        textCalculateOfTip.style.display = "none"
    }, 3000)
})

calcButton.addEventListener("click", function () {

    if(payment.value !== "" && waiter.value !== ""){

        let percentageRating = parseInt(Math.random()* (100 + 1))

        setTimeout(() => {
            rating.innerHTML = `${percentageRating} միավոր 100 միավորից`
         }, 1000)
     
         setTimeout(() => {
             let AllTip = ( ( (+payment.value) * percentageRating ) / 100 )
     
             let tipOfEvery = (AllTip / waiter.value).toFixed(2)
     
             result.innerHTML = `Ընդհանուր թեյավճար - ${AllTip}$ <br> յուրաքանչյուր մատուցող - ${tipOfEvery}&`

             divResult.classList.add("showAnimation")
            //  divResult.style.transition = "1s"
             divResult.style.opacity = "1"
            console.log(divResult.style.opacity)
             payment.value = ""
             waiter.value = ""
             rating.innerHTML = ""
         
         }, 2500);

         setTimeout(() => {

            divResult.classList.remove("showAnimation")
            divResult.classList.add("leaveAnimation")
            // divResult.style.transition = "1s"
            divResult.style.opacity = "0"
            console.log(divResult.style.opacity)

            setTimeout(() => {
                divResult.classList.remove("leaveAnimation")
            }, 1000)


        }, 5000);

    }else {
        alert("Մուտքագրեք բոլոր տվյալները")
    }
})
