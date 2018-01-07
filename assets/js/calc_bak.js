let calc = (function calc(){
    "use strict";

    // var declaration
    let screen,touches,clear,equal;
    let SandBoxValue = ""// tmp var to concate number before push them into the array
    let container = [];


    const init = function init(){

        screen = document.getElementById("screen");
        touches = document.querySelectorAll(".touch--calc");
        clear = document.getElementById("clear");
        equal = document.getElementById("equal--btn");

        touches.forEach((el) => {
            el.onclick = function(){
                displayOnScreen(el);
            };
        });

        clear.onclick = eraseAll;
        equal.onclick = finalResult;

    }

    const displayOnScreen = function (p){ // display on screen
        if (screen.textContent == 0){screen.textContent = "";}; // if AC pressed -> reset
        screen.textContent = p.textContent;
        container.push(p.textContent)
    }

    const eraseAll = function (){ // Reset the screen
        screen.textContent = 0;
        container = [];
    }

    const finalResult = function (){
        console.log(container);
        screen.textContent = eval(container.join(""));
    }

    window.addEventListener("DOMContentLoaded", init);

    return{

    }
}());