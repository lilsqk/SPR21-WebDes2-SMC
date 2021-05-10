// for the carousel: 
let carouselImages = ["1.png", "2.png", "3.png"];
let currentIndex = 2;
let carouselIMG = document.getElementById("carousel-img");

//for the select: 
let groupSelect = document.getElementById("groupSelect");
let categorySelect = document.getElementById("categorySelect");
let animalOptions = ['puppies', 'kittens', 'quokkas'];
let foodOptions = ['fruits', 'vegetables', 'candy', 'grains'];
let natureOptions = ['beaches', 'forests', 'deserts'];

let changeSlide = function(){
    if(currentIndex === 0){
        carouselIMG.src = carouselImages[1];
    }
    else if(currentIndex === 1){
        carouselIMG.src = carouselImages[2];
    }
    else {
        carouselIMG.src = carouselImages[0];
    
    }
    if (CurrentIndex = currentIndex === 2) {
        currentIndex = 0;
    }

    else {
        currentIndex = currentIndex+1;
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
    this.setTimeout(function(){
        prompt("SUBSCRIBE TO OUR NEWSLETTER!", 
        "my@email.com");
    }, 5000);


    //triggered every 5 seconds
    setInterval(changeSlide, 5000);
})

groupSelect.addEventListener("change", updateCategory);