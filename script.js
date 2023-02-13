// we are detecting no of elements have class as "drum"
var noOFDrumButtons = document.querySelectorAll(".drum").length;

// detecting which button is pressed & sending to makesound function
// ham yaha sabh buttons par event listner laga rahe hai
//i==0 haga to first button ko event listner assign hojega ese hi jab i==1hoga to 2nd button ko and soo on
for (var i = 0; i < noOFDrumButtons; i++) {
  // addint event listner which run specific function when get clicked
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // code that run after click write here

    // this. method will give us text which present inside button tag  & this keyword will specify the button that pressed
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    // alert(buttonInnerHTML);
  });
}

// detecting which key is pressed & sending to makesound function
// function(event) will tell us which key is pressed
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  // console.log(event);
});

// makeSound function
function makeSound(key) {

  switch (key) {
    case "w": {
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    }

    case "a": {
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    }

    case "s": {
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    }

    case "d": {
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    }

    case "j": {
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    }

    case "k": {
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    }

    case "l": {
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    }

    default:
      console.log(key);
  }
}
