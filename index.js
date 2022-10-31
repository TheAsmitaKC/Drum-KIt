var Number= document.querySelectorAll(".drum").length;
for(var i=0; i<Number;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML= this.innerHTML;
        switch(buttonInnerHTML){
            case"h":
        var audio= new Audio("sounds/sounds_sound-1.mp3");
        audio.play();
            break;
            case"e":
            var audio= new Audio("sounds/sounds_sound-2.mp3");
            audio.play();
            break;
            case"y":
            var audio= new Audio("sounds/sounds_sound-3.mp3");
            audio.play();
            break;
            case"a":
            var audio= new Audio("sounds/sounds_sound-4.mp3");
            audio.play();
            break;
            case"s":
            var audio= new Audio("sounds/sounds_sound-5.mp3");
            audio.play();
            break;
            case"m":
            var audio= new Audio("sounds/sounds_sound-6.mp3");
            audio.play();
            break;
            case"i":
            var audio= new Audio("sounds/sounds_sound-7.mp3");
            audio.play();
            break;
            default: console.log(buttonInnerHTML);
        }
    });
}