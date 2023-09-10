// Ստանում ենք play pause next previouse button-ները

let playBtn = document.getElementById("play_btn"),
pauseBtn = document.getElementById("pause_btn"),
nextBtn = document.getElementById("next_btn"),
previouseBtn = document.getElementById("previous_btn"),
audio = document.querySelector("#audio"), // Ստանում ենք audio-ն
cover = document.querySelector(".cover"), // Ստանում ենք երգի պտտվող շապիկիը
rightSpeaker = document.querySelector(".right_speaker"), // Ստանում ենք ձախակողմյան դինամիկը
leftSpeaker = document.querySelector(".left_speaker"), // Ստանում ենք աջակողմյան դինամիկը
favoriteSong = document.querySelector(".favorite_song"),
progressContainer = document.querySelector(".progress_container"),
progress = document.querySelector(".progress"), // Ստանում ենք երգի ընթացքը ցույց տվող զագռուզկեն
volume = document.querySelector("#volume"), // Ստանում ենք input-ը ձայնի համար
valueOfVolume = document.querySelector(".value_of_volume"), // Volume-ի արժեքը պատկերելու համար
icons = document.querySelectorAll(".audio_icon"), // Ստանում ենք list_songs div-ի մեջի բոլոր icon-ներից զանգված
audios = document.querySelectorAll(".audio") // Ստանում ենք list_songs div-ի մեջի բոլոր audio-ներից զանգված

console.log(audios)


// console.log(audio)

// Զանգված, որտեղ պահվում են բոլոր երգերի հղումները

const songs = [ "balnie_tanci_latina_rok_-_n_roll_-_dzhajv_(z2.fm)", "chuck-berry_-_you-never-can-tell", 

              "little-richard_-_ready-teddy", 
              
              "motorhead__brit_1974-___hevi-metal_hard_rok_spid-metal_roknroll_-_god_was_never_on_your_side_(z2.fm)",
              
              "rok-n-roll_rocknroll_-_jurij_loza_-_baba_ljuba_(z2.fm)",
              
              "stray-cats_-_rock-this-town", "tanci_rok-n-rolldzhajv_-_i_love_you_cause_i_want_you_(z2.fm)",
              
              "the-beatles_-_rock-and-roll-music", 
               
              
              "tomp3.cc - Jag  The Bambir  Black Blouse", 
              
              "zz-top_-_tush" ]


let songsIndex = 0

// Ֆունկցիա երգը միացնելու համար

function playSong () {

    if(audio.paused){
        audio.play()
        playBtn.style.display = "none"
        pauseBtn.style.display = "block"
        cover.classList.add("rotateCover")
        cover.innerHTML = songs[songsIndex]
        rightSpeaker.classList.add("speker_scale")
        leftSpeaker.classList.add("speker_scale")

        icons[songsIndex].style.color = `rgb(${255}, ${0}, ${0})`

        if(songsIndex === 0){
            favoriteSong.innerHTML = `COVER ${songsIndex + 1}`
        }
        
    }else {
        audio.pause()
        pauseBtn.style.display = "none"
        playBtn.style.display = "block"
        cover.classList.remove("rotateCover")
        rightSpeaker.classList.remove("speker_scale")
        leftSpeaker.classList.remove("speker_scale")
    }

}

playBtn.addEventListener("click", function () {
    playSong()
})

pauseBtn.addEventListener("click", function () {
    playSong()
})

// Ֆունկցիա երգը առաջ թերթելու համար

let indexNext  = 0 

function nextSong () {
    
    if(songsIndex === songs.length - 1){
        icons[songsIndex].style.color = `#004b71`
        songsIndex = 0
        // indexNext = 0
        audio.src = `./audio/${songs[songsIndex]}.mp3`
        cover.innerHTML = songs[songsIndex]
        audio.play()
        favoriteSong.innerHTML = `COVER ${songsIndex + 1}`
        icons[songsIndex].style.color = `rgb(${255}, ${0}, ${0})`

        playBtn.style.display = "none"
        pauseBtn.style.display = "block"
        // console.log(songsIndex)
    }else {
        icons[songsIndex].style.color = `#004b71`
        songsIndex++
        // console.log(songsIndex, indexNext)
        // indexNext++
        audio.src = `./audio/${songs[songsIndex]}.mp3`
        cover.innerHTML = songs[songsIndex]
        audio.play()
        favoriteSong.innerHTML = `COVER ${songsIndex + 1}`
        icons[songsIndex].style.color = `rgb(${255}, ${0}, ${0})`

        playBtn.style.display = "none"
        pauseBtn.style.display = "block"
        // console.log(songsIndex)
    }
}

nextBtn.addEventListener("click" , function () {
    nextSong()
})

// Ֆունկցիա երգը հետ թերթելու համար

function previousSong () {
    if(songsIndex === 0) {
        icons[songsIndex].style.color = `#004b71`

        songsIndex = songs.length - 1
        
        // indexNext = songs.length - 1
        
        icons[songsIndex].style.color = `rgb(${255}, ${0}, ${0})`
        
        audio.src = `./audio/${songs[songsIndex]}.mp3`
        cover.innerHTML = songs[songsIndex]
        audio.play()
        favoriteSong.innerHTML = `COVER ${songsIndex + 1}`

        playBtn.style.display = "none"
        pauseBtn.style.display = "block"
    }else {
        icons[songsIndex].style.color = `#004b71`

        songsIndex--

        icons[songsIndex].style.color = `rgb(${255}, ${0}, ${0})`

        audio.src = `./audio/${songs[songsIndex]}.mp3`
        cover.innerHTML = songs[songsIndex]
        audio.play()
        favoriteSong.innerHTML = `COVER ${songsIndex + 1}`

        playBtn.style.display = "none"
        pauseBtn.style.display = "block"
    }
}

previouseBtn.addEventListener("click", function () {
       previousSong()
})

// Ֆունկցիա progress-ի համար

audio.addEventListener("timeupdate", function () {
    let duration = this.duration
    let currentTime = this.currentTime
    let process = (currentTime / duration) * 100
    progress.style.width = `${process}%`


    if(currentTime === duration) {
        if(songsIndex === songs.length - 1){

            icons[songsIndex].style.color = `#004b71`
            
            songsIndex = 0

            icons[songsIndex].style.color = `rgb(${255}, ${0}, ${0})`
            
            audio.src = `./audio/${songs[songsIndex]}.mp3`
            cover.innerHTML = songs[songsIndex]
            audio.play()
            favoriteSong.innerHTML = `COVER ${songsIndex + 1}`
            // console.log(songsIndex)
        }else {
            
            icons[songsIndex].style.color = `#004b71`

            songsIndex++

            icons[songsIndex].style.color = `rgb(${255}, ${0}, ${0})`
            
            audio.src = `./audio/${songs[songsIndex]}.mp3`
            cover.innerHTML = songs[songsIndex]
            audio.play()
            favoriteSong.innerHTML = `COVER ${songsIndex + 1}`
            // console.log(songsIndex)
        }
    }

})

// Ֆունկցիա երգը առաջ և հետ տալու համար

progressContainer.addEventListener("click", function (e) {
        let width = e.target.clientWidth
        let coordinat = e.offsetX
        let audionDuration = audio.duration
 
        audio.currentTime = (coordinat / width) * audionDuration
       
})

// Ֆունկցիա ձայնի համար

valueOfVolume.innerHTML = volume.value

volume.onclick = function () {
    volume.onmousemove = function () {
        let value = +volume.value
        audio.volume = value * ( 1 / 100 )
        valueOfVolume.innerHTML = volume.value
        valueOfVolume.style.left = `${+volume.value * 2.72}px`
    }
}

// Ֆունկցիա ցուցակի մեջի երգերը անմիջապես երգերի վրա քլիք անելուց միանալու համար

let previouseIndex = 0 // փոփոխական, որտեղ պահվում է icons զանգվածի մեջից այն icon-ի ինդեքսը, որի վրա քլիք է արվում, որպեսզի կառավարվի icon-ի գույնի փոփոխությունը

icons.forEach((val, index) => {
    val.onclick = function () {

        // console.log(songsIndex)
        
        icons[songsIndex].style.color = `#004b71`
        songsIndex = index
        
        let clickedAudio = audios[index].src
        audio.src = clickedAudio
        audio.play()
        
        playBtn.style.display = "none"
        pauseBtn.style.display = "block"
        
        this.style.color = `rgb(${255}, ${0}, ${0})`
        // previouseIndex = index
        
        cover.classList.add("rotateCover")
        cover.innerHTML = songs[index]
        rightSpeaker.classList.add("speker_scale")
        leftSpeaker.classList.add("speker_scale")
    }
})