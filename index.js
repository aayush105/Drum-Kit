var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , handleClick); // here is handleClick() is used then it will directly call the function without being click so we use handleClick so that after click it will call the function and get exectued
}

function handleClick(){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}