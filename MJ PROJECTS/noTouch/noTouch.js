let choice = ["img1","img2","img3","img4","img5"];
let result = ["res1","res2","res3"];

let choice1 = document.querySelector("#choice1")
let choice2 = document.querySelector("#choice2")
let choice3 = document.querySelector("#choice3")

window.onload = function() {

    // randomly select two images from the choices array and display them on screen

    let choiceRandom = Math.floor(Math.random() * 3)

    console.log(choiceRandom)


    // for (let i = 0; i < 3; i++) {
    //     // <img id="rock" src="rock.png">
    //     let choice = document.createElement("img");
    //     choice.id = choices[i];
    //     choice.src = choices[i] + ".png";
    //     choice.addEventListener("click", selectChoice);
    //     document.getElementById("choices").append(choice);
    }
