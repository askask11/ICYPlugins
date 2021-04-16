var doplaysound=true
var musicplayer = document.createElement("audio")
function loadMusic(src)
{
    if(doplaysound)
    {
        musicplayer.src = src
    }
}

function playMusic()
{
    if(doplaysound)
    {
        musicplayer.play()
    }
}
$(document).ready(function () {
    const CLASSNAME = "#topics"
    //create the required element
    var styleele = document.createElement("style")
    styleele.innerHTML = ".font-weight-bold{font-weight: bold;}"
    //append the style element to the head
    $("head")[0].appendChild(styleele)
    var lines = $(CLASSNAME)[0].innerHTML.split("<br>") //split elements by link
    var eles = []//replace those lines with div
    for (var i = 0; i < lines.length; i++) {
        var ele = document.createElement("div")
        ele.classList.add("jjjj")
        ele.innerHTML = lines[i]
        eles[eles.length] = ele
    }

    $(CLASSNAME)[0].innerHTML = ""
    for (var i = 0; i < eles.length; i++) {
        $(CLASSNAME)[0].appendChild(eles[i])
    }

    //input the audio element
    musicplayer.setAttribute("preload",true)
    musicplayer.src="https://file.jianqinggao.com/r/Click%20Button%202.wav"
    $("body")[0].appendChild(musicplayer)
    musicplayer.load()
})


/// chou jiang



function muteUnmute()
{
    if(doplaysound)
    {
        doplaysound=false
        $("#muter").html("&#128263;")
        musicplayer.pause();
    }else
    {
        doplaysound=true
        $("#muter").html("&#128264;")
    }
}


function lottery() {
    loadMusic("https://file.jianqinggao.com/r/Click%20Button%202.wav");
    playMusic();
    setTimeout(()=>{
        const SOUND_EFFECTS = [
        "https://file.jianqinggao.com/r/Computer_Magic.wav",
        "https://file.jianqinggao.com/r/Music%20Box.wav",
        "https://file.jianqinggao.com/r/UI-dingdong.wav"
    ]
    loadMusic(SOUND_EFFECTS[getRandomArbitrary(0, SOUND_EFFECTS.length)]);},1300);

    const BUTTON = "#lotbtn"
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    //disable the lottery button
    $(BUTTON).attr("disabled",true)
    $(BUTTON).text("为您抽选一个话题...")

    // the class of the lottery area, surrounded by the class defined below
    var eles = document.getElementsByClassName("jjjj");
    var counter = 0;
    var int2;
    var int = setInterval(function () {
        //remote all those are highlighed
        $(".jjjj").removeClass("font-weight-bold");
        //get a random number
        var onele = eles[getRandomArbitrary(0, eles.length)]
        onele.classList.add("font-weight-bold")
        counter++; // round ++
        if (counter >= 20) {
            // stop counting
            clearInterval(int)
            playMusic();//play the music
            // start to blink the element that is selected
            var onele = document.querySelector(".jjjj.font-weight-bold")
            var counter2 = 0
            alert("客官~选中话题："+onele.innerHTML);
            //blink element function
            int2 = setInterval(function () {
                // for each round blinked, add counter2
                counter2++;
                // bold
                onele.classList.toggle("font-weight-bold")
                if (counter2 >= 10) {
                    // stop blinking
                    clearInterval(int2)
                    $(BUTTON).attr("disabled",false)
                    $(BUTTON).html("再抽一次")
                }
            }, 350)
        }
    }, 400)
}


