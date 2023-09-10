let input = document.getElementById("input"),
container = document.querySelector(".outer"),
divForItem = document.querySelector(".div_for_item"),
divItem = document.querySelector(".item"),
addBtn = document.getElementById("add"),
crossBtn = document.querySelector(".cross")
// dalete = document.querySelector(".delete"),
// edit = document.querySelector(".edit")

// console.log(crossBtn)
// console.log(edit)

crossBtn.addEventListener("click", function () {

    console.log("eeeee")

    if(input.classList.contains("close")) {
        input.classList.remove("close")
        input.classList.add("show")
        setTimeout(() => {
            input.style.display = "block"
         }, 380)
    }else {
        input.classList.add("close")
        input.classList.remove("show")
        setTimeout(() => {
           input.style.display = "none"
        }, 380)
    }

})

input.addEventListener("focus", function () {
    addBtn.style.opacity = "1"
    addBtn.style.transition = "0.3s"
})

input.addEventListener("blur", function () {
    addBtn.style.opacity = "0"
    addBtn.style.transition = "0.3s"
})

addBtn.addEventListener("click", function () {

    // console.log(input.value)

    if(input.value === "") {
        alert("Add your to-do please")
    }else {

    let divForItem = document.createElement("div"),
    divDalete = document.createElement("div"),
    divItem = document.createElement("div"),
    divEdit = document.createElement("div"),
    iconDelet = document.createElement("i"),
    iconEdit = document.createElement("i")

    divForItem.classList.add("div_for_item")
    divDalete.classList.add("icon")
    divEdit.classList.add("icon")
    divDalete.classList.add("delete")
    divEdit.classList.add("edit")

    divItem.classList.add("item")

    iconDelet.classList.add("fa-solid")
    iconEdit.classList.add("fa-solid")
    iconDelet.classList.add("fa-trash-can")
    iconEdit.classList.add("fa-pen")

    // console.log(iconDelet)
    // console.log(iconEdit)

    divDalete.appendChild(iconDelet)
    divEdit.appendChild(iconEdit)

    // console.log(divDalete)
    // console.log(divDalete)

    divForItem.appendChild(divDalete)
    divForItem.appendChild(divItem)
    divForItem.appendChild(divEdit)

    divItem.innerHTML = input.value

    // console.log(divItem.innerHTML)

    // console.log(divForItem)

    container.appendChild(divForItem)
    
    input.value = ""

    let allDelete = document.querySelectorAll(".delete"),
    allEdit = document.querySelectorAll(".edit")

    console.log(allEdit)

    allDelete.forEach((val) => {
        val.addEventListener("click", function () {
            this.parentNode.remove()
        })
     })

     allEdit.forEach((val) => {
        val.addEventListener("click", function () {

            console.log("EEEEE")

            let divEditInput = document.createElement("div"),
            inputEdit = document.createElement("input"),
            addEditItem = document.createElement("button")
            divEditInput.style.width = "100%"
            divEditInput.style.height = "70px"
            divEditInput.style.position = "relative"
            
            addEditItem.style.width = "60px"
            addEditItem.style.height = "40px"
            addEditItem.innerText = "edit"
            addEditItem.style.lineHeight = "30px"
            addEditItem.style.fontSize = "18px"
            addEditItem.style.background = "#74ff7e"
            addEditItem.style.border = "none"
            addEditItem.style.borderRadius = "3px"
            addEditItem.classList.add("editBtn")
            addEditItem.style.cursor = "pointer"

            
            inputEdit.style.width = "100%"
            inputEdit.style.height = "100%"
            inputEdit.style.paddingLeft = "10px"
            inputEdit.style.fontSize = "23px"
            inputEdit.style.color = `rgb(${0}, ${0}, ${255})`
            inputEdit.style.letterSpacing = "2px"
            
            addEditItem.style.position = "absolute"
            addEditItem.style.top = "15px"
            addEditItem.style.right = "20px"

            divEditInput.appendChild(inputEdit)
            divEditInput.appendChild(addEditItem)
            val.parentNode.replaceWith(divEditInput)

            addEditItem.onmouseover = function () {
                this.style.background = `rgb(${137}, ${153}, ${255})`
                this.style.transition = `0.4s`
            }

            addEditItem.onmouseleave = function () {
                this.style.background = `#74ff7e`
                this.style.transition = `0.4s`
            }

            let allEditBtn = document.querySelectorAll(".editBtn")

            allEditBtn.forEach((val) => {
                val.addEventListener("click", function () {

                    let divForItem = document.createElement("div"),
                    divDalete = document.createElement("div"),
                    divItem = document.createElement("div"),
                    divEdit = document.createElement("div"),
                    iconDelet = document.createElement("i"),
                    iconEdit = document.createElement("i")
                
                    divForItem.classList.add("div_for_item")
                    divDalete.classList.add("icon")
                    divEdit.classList.add("icon")
                    divDalete.classList.add("delete")
                    divEdit.classList.add("edit")
                
                    divItem.classList.add("item")
                
                    iconDelet.classList.add("fa-solid")
                    iconEdit.classList.add("fa-solid")
                    iconDelet.classList.add("fa-trash-can")
                    iconEdit.classList.add("fa-pen")
                
                    divDalete.appendChild(iconDelet)
                    divEdit.appendChild(iconEdit)
                
                    divForItem.appendChild(divDalete)
                    divForItem.appendChild(divItem)
                    divForItem.appendChild(divEdit)
                
                    divItem.innerHTML = inputEdit.value
                
                    divEditInput.replaceWith(divForItem)


                    let allDelete = document.querySelectorAll(".delete"),
                        allEdit = document.querySelectorAll(".edit")
                    
                        console.log(allEdit)
                    
                        allDelete.forEach((val) => {
                            val.addEventListener("click", function () {
                                this.parentNode.remove()
                            })
                         })
                })
            })
        })
     })

    }

})
