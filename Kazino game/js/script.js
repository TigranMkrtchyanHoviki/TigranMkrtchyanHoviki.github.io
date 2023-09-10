let result = document.getElementById("result")
let ruletka = document.getElementById("ruletka")
let number = document.getElementById("number")
let topMoney = document.getElementById("top")
let betBotton = document.getElementById("bet_botton")
let betField = document.querySelector(".bet")
let betResult = document.querySelector(".bet_result")
let divMoneyclass = [...document.querySelectorAll(".money")]
let imgs = [...document.querySelectorAll(".img")]
let moneOfEveryPlayer = [...document.querySelectorAll(".money_of_every_pleyer")]

let inputs = [...document.querySelectorAll(".input")]
// console.log("imgs1", imgs[0].src === "", imgs[1].src === "", imgs[2].src === "", imgs[3].src === "")

let spinBtn = document.getElementById("spin")
let clapping = document.getElementById("clapping")

let agreeBotton = [...document.querySelectorAll(".agree_botton")]
let classKon = [...document.querySelectorAll(".kon")]
let passBotton = [...document.querySelectorAll(".pass_botton")]

let passCount = 0

function getClapping() {
  // console.log(clapping.style.display)
  setTimeout(() => {
    clapping.style.display = "block"
  }, 2000)

  setTimeout(() => {
    clapping.style.display = "none"
  }, 6000)
}

// RULETKA-յի ՊՏՈՒՅՏԻ ՀԱՄԱՐ

spinBtn.addEventListener("click", () => {

  result.innerHTML = ""

  if (ruletka.style.transition) {

    ruletka.style.transition = ""
    ruletka.style.transform = ""

  } else {

    ruletka.style.transition = "6s"
    ruletka.style.transform = "rotate(7200deg)"

    // console.log("imgs2", imgs[0].src === "", imgs[1].src === "", imgs[2].src === "", imgs[3].src === "")

    setTimeout(() => {

      let randomNumber = Math.floor(Math.random() * (10 + 1))
      result.style.fontSize = "70px"
      result.style.textAlign = 'center'
      result.style.marginTop = "5px"
      result.innerHTML = `${randomNumber}`

      setTimeout(() => {

        inputs.forEach((input, inputIndex) => {
          // console.log(input.value === result.innerHTML)
          if (input.value === result.innerHTML && classKon[inputIndex].innerHTML !== "PASS") {

            imgs[inputIndex].src = ""
            divMoneyclass[inputIndex].style.transform = `scale(${1.3})`
            divMoneyclass[inputIndex].style.backgroundColor = "red"
            classKon[inputIndex].innerHTML = "ԴՈՒՔ ՇԱՀԵՑԻՔ"
            // console.log("if")

            getClapping()
            // console.log("classKon", classKon)
            // console.log("PASS_COUNT", passCount)
            setTimeout(() => {

              let currentMoney = +moneOfEveryPlayer[inputIndex].innerHTML.split("$").filter((elem) => {
                return elem
              }).join()


              let betMoney = (+betField.firstElementChild.innerHTML.split("$").filter((elem) => {
                return elem
              }).join()) * (divMoneyclass.length - passCount)

              // console.log(betMoney)

              let sumOfmoney = `$${currentMoney + betMoney}`

              moneOfEveryPlayer[inputIndex].innerHTML = sumOfmoney



              setTimeout(() => {

                imgs.forEach((img, imgIndex) => {

                  console.log("henc hima")

                  img.src = ""
                  classKon[imgIndex].style.textAlign = "center"
                  classKon[imgIndex].style.marginTop = "55px"
                  classKon[imgIndex].style.fontSize = "20px"
                  classKon[imgIndex].innerHTML = "ԱՐԵՔ ՁԵՐ ԽԱՂԱԴՐՈՒՅՔԸ"

                  divMoneyclass.forEach((elem) => {
                    elem.style.transform = `scale(${1})`
                    elem.style.backgroundColor = "white"
                  })

                  passCount = 0
                  // inputs.forEach((input) => {
                  //      input.value = ""
                  // })

                })

              }, 2000)

            }, 7000)

          } else {

            if ( inputs[0].value !== result.innerHTML 
              && inputs[1].value !== result.innerHTML 
              && inputs[2].value !== result.innerHTML 
              && inputs[3].value !== result.innerHTML ) {

                setTimeout(() => {

                  imgs.forEach((val, imgIndex) => {
    
                    val.src = ""
                    classKon[imgIndex].style.textAlign = "center"
                    classKon[imgIndex].style.marginTop = "55px"
                    classKon[imgIndex].style.fontSize = "20px"
                    classKon[imgIndex].innerHTML = "ԱՐԵՔ ՁԵՐ ԽԱՂԱԴՐՈՒՅՔԸ"
                  })
    
                }, 1000)

            }else {

              setTimeout(() => {

                imgs.forEach((val, imgIndex) => {
  
                  val.src = ""
                  classKon[imgIndex].style.textAlign = "center"
                  classKon[imgIndex].style.marginTop = "55px"
                  classKon[imgIndex].style.fontSize = "20px"
                  classKon[imgIndex].innerHTML = "ԱՐԵՔ ՁԵՐ ԽԱՂԱԴՐՈՒՅՔԸ"
                })
  
              }, 9000)

            }

          }

        })

      }, 1000)

    }, 7000)

  }
})

// ՆԱԽՆԱԿԱՆ ԽԱՂԱԴՐՈՒՅՔԻ ՉԱՓԸ ՈՐՈՇԵԼՈՒ ՀԱՄԱՐ

betBotton.addEventListener("click", () => {

  setTimeout(() => {

    let randomNumBet = Math.floor(Math.random() * (4 + 1))
    data.betAmount.forEach((val, index) => {
      if (index === randomNumBet) {
        betResult.innerHTML = val
      }
    })
  })
})

// PASS BOTTON-ի ՀԱՄԱՐ

passBotton.forEach((val, index) => {

  val.onclick = function () {
    console.log(imgs[index].src)
    if (classKon[index].innerHTML !== "PASS") {
      classKon[index].style.fontSize = "50px"
      classKon[index].style.marginTop = "30px"
      classKon[index].innerHTML = "PASS"

      passCount++
      console.log(passCount)

    }

    if (classKon[0].innerHTML === "PASS" && classKon[1].innerHTML === "PASS"
      && classKon[2].innerHTML === "PASS" && classKon[3].innerHTML === "PASS") {

      setTimeout(() => {

        imgs.forEach((img, imgIndex) => {

          img.src = ""
          classKon[imgIndex].style.textAlign = "center"
          classKon[imgIndex].style.marginTop = "55px"
          classKon[imgIndex].style.fontSize = "20px"
          classKon[imgIndex].innerHTML = "ԱՐԵՔ ՁԵՐ ԽԱՂԱԴՐՈՒՅՔԸ"

          passCount = 0
          inputs.forEach((input) => {
            input.value = ""
          })

        })
      }, 1000)
    }

  }
})

// AGREE BOTTON-ի ՀԱՄԱՐ

agreeBotton.forEach((val, valIndex) => {

  val.onclick = function () {
    // console.log(imgs[valIndex].src)
    if (classKon[valIndex].innerHTML === "ԱՐԵՔ ՁԵՐ ԽԱՂԱԴՐՈՒՅՔԸ") {

      classKon[valIndex].innerHTML = ""
      data.betAmount.forEach((elem, elemIndex) => {

        if (elem === betResult.innerHTML) {
          imgs.forEach((img, imgIndex) => {
            if (imgIndex === valIndex) {

              if (divMoneyclass[imgIndex].style.transform) {
                divMoneyclass[imgIndex].style.transition = ""
                divMoneyclass[imgIndex].style.transform = ""
                img.src = data.money[elemIndex]
              } else {
                divMoneyclass[imgIndex].style.transition = "0.5s"
                divMoneyclass[imgIndex].style.transform = "rotateX(360deg)"
                img.src = data.money[elemIndex]
              }

              let currentMoney = +moneOfEveryPlayer[valIndex].innerHTML.split("$").filter((elem) => {
                return elem
              }).join()

              console.log(currentMoney)

              let betMoney = +betField.firstElementChild.innerHTML.split("$").filter((elem) => {
                return elem
              }).join()

              let afterRate = currentMoney - betMoney

              moneOfEveryPlayer[valIndex].innerHTML = `$${afterRate}`

            }
          })
        }
      })

    }

  }
})


// ԽԱՂԱՑՈՂՆԵՐԻ ՇԱՀԱԾ ԿԱՄ ԿՈՐՑՐԱԾ ՓՈՂԵՐԸ ՀԱՇՎԵԼՈՒ ՀԱՄԱՐ





let data = {

  betAmount: [
    "$1",
    "$10",
    "$20",
    "$50",
    "$100",
  ],

  money: [
    "./img/$1.jpg",
    "./img/$10.jpg",
    "./img/$20.jpg",
    "./img/$50.jpg",
    "./img/$100.jpg",
  ]

}

