let changeSlide = function(){
    console.log("something");
}

window.addEventListener("load", function(){
    this.setTimeout(function(){
        prompt("SUBSCRIBE TO OUR NEWSLETTER!", 
        "my@email.com");
    }, 5000);


    //triggered every 5 seconds
    setInterval(changeSlide, 5000);
})