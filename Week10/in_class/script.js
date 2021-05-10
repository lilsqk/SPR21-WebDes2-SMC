let header = document.getElementById("myHeader");
let clrBTN = document.getElementById("colorBTN");

let changeTheColor = function(){
    // COLOR CHANGING HERE
    let redComp = Math.random() * 255;
    let greenComp = Math.random() * 255;
    let blueComp = Math.random () * 255;
    console.log("RED: " + redComp);
    console.log("GREEN: " + greenComp);
    console.log("BLUE: " + blueComp);

    header.style.backgroundColor = "rgb("+ redComp + ", "+ greenComp + ", "+ blueComp +")";
}

clrBTN.addEventListener("click", changeTheColor);
