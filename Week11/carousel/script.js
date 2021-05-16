// for the carousel: 
let carouselImages = ["puppies1.jpeg", "puppies2.jpeg", "puppies3.jpeg"];
let carouselImages2 = ["kittens1.jpeg", "kittens2.jpeg", "kittens3.jpeg"];
let carouselImages3 = ["quokkas1.jpeg", "quokkas2.jpeg", "quokkas3.jpeg"];

let currentIndex = 2;
let currentArray = carouselImages;

let carouselIMG = document.getElementById("carousel-img");

//for the select: 
let groupSelect = document.getElementById("groupSelect");
let categorySelect = document.getElementById("categorySelect");
let animalOptions = ['puppies', 'kittens', 'quokkas'];
let foodOptions = ['fruits', 'vegetables', 'candy', 'grains'];
let natureOptions = ['beaches', 'forests', 'deserts'];



let changeSlide = function(){
    if(currentIndex === 0){
        carouselIMG.src = currentArray[1];
    }
    else if(currentIndex === 1){
        carouselIMG.src = currentArray[2];
    }
    else {
        carouselIMG.src = currentArray[0];
    
    }
    if (currentIndex === 2) {
        currentIndex = 0;
    }

    else {
        currentIndex = currentIndex+1;
    }
}


let updateSlider = function () {
    let selectedCategory = categorySelect.value;
    if (selectedCategory === 'kittens') {
        crrentArray = carouselImages2;
    }

    if (selectedCategory === 'puppies') {
        currentArray = carouselImages;
    }

    if (selectedCategory === 'quokkas') {
        currentArray = carouselImages3;
    }
}




let updateCategory = function(){
    console.log(groupSelect);
    let selectedValue = groupSelect.value;
    if (selectedValue === "animals") {
        animalOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem +'">' + elem + '</option>';
        })
    }
    else if (selectedValue === "food") {
        foodOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem +'">' + elem + '</option>';
        })
    }
    else if (selectedValue === "nature") {
        natureOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem +'">' + elem + '</option>';
        })
    }
}



window.addEventListener("load", function(){
    //triggered every 5 seconds
    setInterval(changeSlide, 5000);
})

groupSelect.addEventListener("change", updateCategory);
categorySelect.addEventListener("change", updateSlider);