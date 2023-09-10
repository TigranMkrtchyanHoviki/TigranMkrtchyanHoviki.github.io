// start date

let aphorisms = document.getElementById("text_of_auother")
let name = document.getElementById("name")

let button = document.getElementById("btn")
let buttonOfRandomAphorism = document.getElementById("button")

let date = {
        
        text: [
             "Երբեք մի վախեցեք նոր բաներ փորձելուց։ Եվ հիշեք, որ Նոյյան տապանը կառուցել է անփորձ մարդը, իսկ Տիտանիկը կառուցել է ինժեներների մի հսկայական խումբ։",
             "Դուք երբեք չեք հասնի նշված վայրին, եթե քար նետեք յուրաքանչյուր հաչող շան ուղղությամբ:",
             "Պարիր այնպես, ասես ոչ ոք քեզ չի նայում։ Երգիր այնպես, ասես ոչ ոք քեզ չի լսում։ Սիրիր այնպես, ասես քեզ երբեք չեն դավաճանել, և ապրիր այնպես, ասես երկիրը դրախտ է։",
             "Շատ առաջ նայելն անհեռատեսություն է:",
             "Աշխատեք ստանալ այն, ինչ սիրում եք, այլապես ստիպված կլինեք սիրել այն, ինչ ստացել եք։"
        ],

        aouther: [
             "Էռնեստ Հեմենգուեյ",
             "Ուինսթոն Չերչիլ",
             "Մարկ Տվեն",
             "Բեռնարդ Շոու",
             "Ուինսթոն Չերչիլ"
        ]

}

// end date

// ՖՈՒՆԿՑԻԱ ՏԵՔՍՏԻ ՊԱՏԱՀԱԿԱՆ ԳՈՒՅՆԻ ՀԱՄԱՐ

function getRandomColor () {
    
    let arg1 = Math.floor(Math.random()*(255 + 1))
    let arg2 = Math.floor(Math.random()*(255 + 1))
    let arg3 = Math.floor(Math.random()*(255 + 1))
    
    let color = `rgb(${arg1}, ${arg2}, ${arg3})`

    return color
}

// ՖՈՒՆԿՑԻԱ CLICK-ՈՎ ԱՖՈՐԻԶՄՆԵՐԸ ԹԵՐԹԵԼՈՒ ՀԱՄԱՐ

let count = 0

function leaf () {
    
    if(count === date.text.length) {
        count = 0
        let randomColor = getRandomColor()
        aphorisms.style.color = randomColor
        aphorisms.innerText = date.text[count]
        name.style.color = randomColor
        
    }else {

        let randomColor = getRandomColor()

        aphorisms.innerText = date.text[count]
        aphorisms.style.color = randomColor
        name.innerText = date.aouther[count]
        name.style.color = randomColor
        count++
    }
}

button.onclick = leaf

// ՖՈՒՆԿՑԻԱ DOUBLECLICK-ՈՎ ՊԱՏԱՀԱԿԱՆ ԱՖՈՐԻԶՄ ԲԵՐԵԼՈՒ ՀԱՄԱՐ

let check = 0

function getRandomAphorism () {
    
    let count = Math.floor(Math.random()*(date.text.length-1 + 1))
    let randomColor = getRandomColor()

    console.log(count)
    
    if(check === count) {
        
        aphorisms.innerText = "ՆՈՐԻՑ ՓՈՐՁԻՐ"
        aphorisms.style.color = randomColor
        name.style.fontSize = "21px"
        name.innerText = "Ի՞նչ ես զարմացած նայում, քեզ ասեցին նորից փորձիր, վա՜յ․․․"
        name.style.color = randomColor
    
    }else {
        
        aphorisms.innerText = date.text[count]
        aphorisms.style.color = randomColor
        name.innerText = date.aouther[count]
        name.style.color = randomColor

        check = count
}

}


buttonOfRandomAphorism.onclick = getRandomAphorism
