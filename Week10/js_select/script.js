let bigImg = document.getElementById("big");
let icon = document.getElementById("toggleButton");
let checkBox = document.getElementById("toggle");


function toggleTheImage() {
    bigImg.src = "swim1.jpeg";
}

function toggleTheImage2() {
    bigImg.src = "swim2.jpeg";
}

function toggleTheImage3() {
    bigImg.src = "swim3.jpeg";
}

function toggleTheImage4() {
    bigImg.src = "swim4.jpeg";
}

function changeTheIcon() {
// if checkbox is checked, change image
if (checkBox.checked) {
    icon.src = "x.png";
}
//else, leave image
else {
    icon.src = "menu.png";
}
}

swim1.addEventListener("click", toggleTheImage);
swim2.addEventListener("click", toggleTheImage2);
swim3.addEventListener("click", toggleTheImage3);
swim4.addEventListener("click", toggleTheImage4);
checkBox.addEventListener("change", changeTheIcon);