let header = document.getElementById("myHeader");
let clrBTN = document.getElementById("colorBTN");
let cuteImg = document.getElementById("cutie");
let tgglBTN = document.getElementById("toggleBTN")

function changeTheColor(){
    // COLOR CHANGING HERE
    let redComp = Math.random() * 255;
    let greenComp = Math.random() * 255;
    let blueComp = Math.random () * 255;
    console.log("RED: " + redComp);
    console.log("GREEN: " + greenComp);
    console.log("BLUE: " + blueComp);

    header.style.backgroundColor = "rgb("+ redComp + ", "+ greenComp + ", "+ blueComp +")";
}

let toggleTheImage = function(){
    // IMAGE TOGGLING HERE

    if (tgglBTN.innerText === "Now show the second one!") {
        console.log("show the second image")
        cuteImg.src = "pch.jpeg";
        tgglBTN.innerText = "Now show the first one!";
    }
    else {
        console.log("show the first image");
        cuteImg.src = "cute.jpeg";
        tgglBTN.innerText = "Now show the second one!";

        //if it's false
    }
    
}

changeTheColor();

tgglBTN.addEventListener("click", toggleTheImage);
clrBTN.addEventListener("click", changeTheColor);
