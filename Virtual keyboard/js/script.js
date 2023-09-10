$(document).ready(function () {

        let keyboard = $("#div_keyboard") // ստանում ենք textarea քլիքի ժամանակ տակից վերև բարձրացող կլավիատուրան
        let textarea = $("textarea") // ստանում ենք textarea, որտեղ պետք է գրվի տեքստը
        let result = "" // փոփոխական, որի մեջ պետք ա հավաքվի ցլիք արվող button-ների տեքստային արժեքները
        let index = 0 // փոփոխական, որը օգտագործվելու է փոքրատառից մեծատառ և հակառակ անցման մեջ
        let indexAmUsRu = 0 // փոփոխական, որը օգտագործվելու է լեզուն թոխելու մեջ
        let arr = []
        let symbols = [] // զանգված, որի մեջ հավաքվում են որոշ սիմվոլներ, որոնք էլ պետք են գալու հայերենից անգլերեն լեզվի անցման ժամանակ 

        $(".from_am_to_us").each(function () { // Ֆունկցի, որն ապահով ում է վերևում նշած որոշ սիմվոլների պահպանումը
            symbols.push(`${$(this).text()}`)   
        })

        $("#textarea").click(function () {  // textarea-ի վրա քլիքի ժամանակ ի հայտ է բերում ստեղնաշարը

                keyboard.css("display", "block")
                        .addClass("show")
                        .css("top", "395px")
                        .removeClass("hide")

        })

        $("#down_keyboard").click(function () { // #down_keyboard id-ով button-ի վրա քլիքի ժամանակ անհայտացնում է ստեղնաշարը

                keyboard.addClass("hide")
                        .css("top", "745px")
                        .removeClass("show")

                setTimeout(() => {
                        keyboard.css("display", "none")
                }, 200)
        })

        $(".char_num").each(function () {   // տարբեր button-ների վրա քլիքի ժամանակ տեղտ է գրում textarea-ի մեջ
                $(this).click(function () {
                        textarea.text(`${result += $(this).text()}`)
                })

        })

        $("#space").click(function () {            // բացատի վրա քլիքի դեպքում ապահովում է տառերի միջև տարածությունը 
                textarea.text(`${result += " "}`)

        })

        $("#clear").click(function () {     // գրված տեքստը ջնջելու համար 
                result = result.substring(0, result.length - 1)
                textarea.text(`${result}`)
        })

        $("#enter").click(function () {   // տեքստը հաջորդ տող տանելու համար
                result += "\n"
                textarea.text(`${result}`)
        })

        $("#upperCase_lowerCase").click(function () {  // փոքրատառից մեծատառ և հակառակը փոխելու համար

                let en = $(".char_en").css("color")
                let ru = $(".char_ru").css("color")
                let am = $(".char_am").css("color")
                 
                 if(en === "rgb(0, 153, 255)"){
                        
                        changeUsCase()
                 
                 }else if (ru === "rgb(0, 153, 255)"){
                        
                        changeRuCase()
                 }else {
                        changeAmCase()
                 }
                
        })

        $("#change_language").click(function () {   //  լեզուն փոխելու համար
                
                let en = $(".char_en").css("color")
                let ru = $(".char_ru").css("color")
                let am = $(".char_am").css("color")
                
                if(en === "rgb(0, 153, 255)"){
                        
                        $(".title").text("Виртуальная клавиатура")
                        $(".char_en").css("color", "rgb(255, 255, 255)")
                        $(".char_ru").css("color", "rgb(0, 153, 255)")

                        $(".activ").css("color", `#ffffff`)

                        console.log( $(".ru"))

                        $(".ru").each(function () {
                                $(this).text(`${russianLowerChar[indexAmUsRu]}`)
                                indexAmUsRu++ 
                        })  

                        arr.length = 0
                
                }else if(ru === "rgb(0, 153, 255)") {
                        
                        $(".title").text("Վիրտուալ ստեղնաշար")
                        $(".char_ru").css("color", "rgb(255, 255, 255)")
                        $(".char_am").css("color", "rgb(0, 153, 255)")

                        $(".activ").css("color", `#ffffff`)

                        $(".am").each(function () {
                                $(this).text(`${armenianLowerChar[indexAmUsRu]}`)
                                indexAmUsRu++ 
                        })  

                        arr.length = 0
                
                }else {

                        $(".title").text("Virtual keyboard")
                        $(".char_am").css("color", "rgb(255, 255, 255)")
                        $(".char_en").css("color", "rgb(0, 153, 255)")

                        $(".activ").css("color", `#ffffff`)

                        $(".char").each(function () {
                                $(this).text(`${usa[indexAmUsRu]}`)
                                indexAmUsRu++ 
                        })

                        indexAmUsRu = 0

                        $(".from_am_to_us").each(function () {
                                $(this).text(`${symbols[indexAmUsRu]}`)
                                
                                indexAmUsRu++
                        })
   
                        arr.length = 0
                }

                indexAmUsRu = 0
        })

        function changeUsCase () {  // Անգլերեն տառերը փոքրատառից մեծատառ և հակառակ փոխելու համար
                
                if(arr.length){
                        
                        $(".char").each(function () {
                                $(this).text(`${arr[index]}`)
                                index++
                        });
                        
                        index = 0
                        arr.length = 0
        
                        $(".activ").css("color", `#ffffff`)
                
                }else {
                        
                        $(".char").each(function () {
                                arr.push($(this).text())
                                $(this).text(`${data[index]}`)
                                index++
                        });
        
                        index = 0
        
                        $(".activ").css("color", `#37ff00`)
                }
        }

        function changeRuCase () {   //   ռուսերեն տառերը փոքրատառից մեծատառ և հակառակ փոխելու համար

                if(arr.length){
                        
                        $(".ru").each(function () {
                                $(this).text(`${arr[index]}`)
                                index++
                        });
                        
                        index = 0
                        arr.length = 0
        
                        $(".activ").css("color", `#ffffff`)
                
                }else {
                        
                        $(".ru").each(function () {
                                arr.push($(this).text())
                                $(this).text(`${russianUpperChar[index]}`)
                                index++
                        });
        
                        index = 0
        
                        $(".activ").css("color", `#37ff00`)
                }
        }

        function changeAmCase () {   //   հայերեն տառերը փոքրատառից մեծատառ և հակառակ փոխելու համար
                
                if(arr.length){
                        
                        $(".am").each(function () {
                                $(this).text(`${arr[index]}`)
                                index++
                        });
                        
                        index = 0
                        arr.length = 0
        
                        $(".activ").css("color", `#ffffff`)
                
                }else {
                        
                        $(".am").each(function () {
                                arr.push($(this).text())
                                $(this).text(`${armenianUpperChar[index]}`)
                                index++
                        });
        
                        index = 0
        
                        $(".activ").css("color", `#37ff00`)
                }
        }


        let usa = [ "q", "w", "e", "r", "t", "y", "u", "i", "o", // զանգված, որտեղ պահվում են անգլերեն լեզվի փոքրատառերը
                    "p", "a", "s", "d", "f", "g", "h", "j", "k", 
                    "l", "z", "x", "c", "v", "b", "n", "m",  ]
        
        let data = [ "Q", "W", "E", "R", "T", "Y", "U", "I", "O", // զանգված, որտեղ պահվում են անգլերեն լեզվի մեծատառերը
                    "P", "A", "S", "D", "F", "G", "H", "J", "K", 
                    "L", "Z", "X", "C", "V", "B", "N", "M", ]

        let russianLowerChar = [ "ё", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", // զանգված, որտեղ պահվում են ռուսերեն լեզվի փոքրատառերը
                                 "ъ", "ф", "ы", "в", "а", "р", "о", "л", "д", "ж", "э", "я", 
                                 "ч", "с", "м", "и", "т", "б", "ь", "б", "ю", ]

        let russianUpperChar = [ "Ё", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х",  //  զանգված, որտեղ պահվում են ռուսերեն լեզվի մեծատառերը
                                 "Ъ", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", 
                                 "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ]

        let armenianLowerChar = [ "է", "թ", "փ", "ձ", "ջ", "և", "ր", "չ", "ճ", "ժ", "ք", "ո", //   զանգված, որտեղ պահվում են հայերեն լեզվի փոքրատառերը
                                  "ե", "ռ", "տ", "ը", "ւ", "ի", "օ", "պ", "խ", "ծ", "շ", "ա", 
                                  "ս", "դ", "ֆ", "գ", "հ", "յ", "կ", "լ", "զ", "ղ", "ց", "վ", "բ", "ն", "մ", ]

        let armenianUpperChar = [ "Է", "Թ", "Փ", "Ձ", "Ջ", "Ւ", "և", "Ր", "Չ", "Ճ", "Ժ", "Ք",    //   զանգված, որտեղ պահվում են հայերեն լեզվի մեծատառերը
                                  "Ո", "Ե", "Ռ", "Տ", "Ը", "Ւ", "Ի", "Օ", "Պ", "Խ", "Ծ", "Շ", 
                                  "Ա", "Ս", "Դ", "Ֆ", "Գ", "Հ", "Յ", "Կ", "Լ", "Զ", "Ղ", "Ց", "Վ", "Բ", "Ն", "Մ", ]
})