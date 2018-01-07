let calc = (function calc(){
    "use strict";

    // Reste à faire :

    //passer les values dans les dataSet
    //regler le pb quand on appuie sur C après avoir valider le calcul


    // #### variables declaration #####
    //btns
    let screen,smallScreen,touches,clear,equal,operators,cBtn,toggleNegativeBtn;
    //containers
    let tmpContainer = ""// tmp var to concate number before push them into the array
    let containOperator = "";
    let container = []; // tab contain final result to eval()
    let result;
    //html elements

    const init = function init(){

        screen              = document.getElementById("screen");
        smallScreen         = document.getElementById("small-screen");
        touches             = document.querySelectorAll(".touch--calc");
        clear               = document.getElementById("clear");
        equal               = document.getElementById("equal--btn");
        operators           = document.querySelectorAll(".operators");
        cBtn                = document.getElementById("clear--one");
        toggleNegativeBtn   = document.getElementById("toggle-negative");



        touches.forEach((el) => { // stock to tmp var in every num keypress 
            el.onclick = function(){
                displayOnScreen(el);
                stockToTmpVar(el);
            };
        });

        operators.forEach((el) => { // click on + / * or -
            el.onclick = function(){
                containOperator = el.textContent;
                displayOnSmallScreen(containOperator);
                container.push(tmpContainer);
                container.push(containOperator);
                tmpContainer = ""; //empty tmp var to continue calc            
            }
        })

        clear.onclick = eraseAll;
        equal.onclick = finalResult;
        cBtn.onclick = clearLastChar;
        toggleNegativeBtn.onclick = toggleNegative;


    }


    const toggleNegative = function(){
        if (tmpContainer.length > 0){
            tmpContainer = tmpContainer * -1;
            screen.textContent = tmpContainer;
         }
    }

    const clearLastChar = function (){ // Remove last char entered
        if (tmpContainer.length > 0){
           tmpContainer = tmpContainer.substring(0, tmpContainer.length - 1);
        }
        if (tmpContainer.length == 0){
            tmpContainer = 0;
        }
        console.log(tmpContainer);
        screen.textContent = tmpContainer;
    }

    const displayOnScreen = function (p){ // display on screen
        if (screen.textContent == 0){screen.textContent = "";}; // if AC pressed -> reset
        
        if (tmpContainer !== ""){ // check for concat or not
            screen.textContent += p.textContent;
        } else {
            screen.textContent = p.textContent;
        }
    }

    const displayOnSmallScreen = function (p) {
        smallScreen.textContent = containOperator;
    }    

    const stockToTmpVar = function (p){
        tmpContainer += p.textContent;
    }

    const eraseAll = function (){ // Reset the screen
        screen.textContent = 0;
        smallScreen.textContent = "";
        container = [];
        tmpContainer = "";
        containOperator = "";
    }

    const finalResult = function (){
        container.push(tmpContainer);
        screen.textContent = eval(container.join("")); // voir comment remplacer eval
        tmpContainer = "";
        console.log(container);
        //container = []; //si j'efface je peux plus continuer les calculs apres le =   
    }

    window.addEventListener("DOMContentLoaded", init);

    return{

    }
}());