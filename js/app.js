
var drumsetItem = document.querySelectorAll("button");

// EVENT LISTENER: BUTTON CLICK
for(var i=0; i < drumsetItem.length; i++){
    drumsetItem[i].addEventListener("click", function(){
        var pressedKey = this.textContent;

        playSound(pressedKey);
    });
}

// EVENT LISTENER: KEYBOARD PRESS
document.addEventListener("keypress", function(e){
    var keypressed = e.key;

    playSound(keypressed);
});

// CHANGING IMAGE
var myImage = document.querySelector("img");

myImage.onclick = function(){
    var mySrc = myImage.getAttribute("src");
}

function playSound(keypressed){

    switch(keypressed){
        case "a":
        case "s":
            var tom1 = new Audio("audio/tom1.mp3");
            tom1.play();
            myImage.setAttribute("src", "images/drumset_tom1.png");
            setTimeout(function(){
                myImage.setAttribute("src", "images/drumset.png");
            }, 200)
            break;
        
        case "d":
        case "f":
            var tom1 = new Audio("audio/tom2.mp3");
            tom1.play();
            myImage.setAttribute("src", "images/drumset_tom2.png");
            setTimeout(function(){
                myImage.setAttribute("src", "images/drumset.png");
            }, 200)
            break;

        case "h":
        case "j":
            var tom1 = new Audio("audio/tom3.mp3");
            tom1.play();
            myImage.setAttribute("src", "images/drumset_tom3.png");
            setTimeout(function(){
                myImage.setAttribute("src", "images/drumset.png");
            }, 200)
            break;

        case "k":
        case "l":
            var tom1 = new Audio("audio/snare.mp3");
            tom1.play();
            myImage.setAttribute("src", "images/drumset_snare.png");
            setTimeout(function(){
                myImage.setAttribute("src", "images/drumset.png");
            }, 200)
            break;

        case "b":
            var tom1 = new Audio("audio/bass.mp3");
            tom1.play();
            myImage.setAttribute("src", "images/drumset.png");
            setTimeout(function(){
                myImage.setAttribute("src", "images/drumset.png");
            }, 200)
            break;
        
        case "r":
            var tom1 = new Audio("audio/crash.mp3");
            tom1.play();
            myImage.setAttribute("src", "images/drumset_crash.png");
            setTimeout(function(){
                myImage.setAttribute("src", "images/drumset.png");
            }, 200)
            break;
            
        case "y":
        case "u":
            var tom1 = new Audio("audio/hihat.mp3");
            tom1.play();
            myImage.setAttribute("src", "images/drumset_hihat.png");
            setTimeout(function(){
                myImage.setAttribute("src", "images/drumset.png");
            }, 200)
            break;
            
        case "v":
            var tom1 = new Audio("audio/sticks.mp3");
            tom1.play();
            myImage.setAttribute("src", "images/drumset_sticks.png");
            setTimeout(function(){
                myImage.setAttribute("src", "images/drumset.png");
            }, 200)
            break;
        default:
            alert("Pressed a different key or make sure to turn off the capslock!");
            break;
    }
}