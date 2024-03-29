"use strict"

let slideIndex = 0
let timer

let slides = document.querySelectorAll('.slides')
let dotContainer = document.querySelector('.dotContainer')

// creates dots acording to the amount of slides
let id = 0
for (let i of slides){    
    let dot = document.createElement('div')
    dot.className = 'dot'
    id++
    dot.id = id
    dotContainer.appendChild(dot)
}

let dots = document.querySelectorAll('.dot')

// adds click eventhandler to all dots
for (let i of dots){
    i.addEventListener('click', function(e){
        // changes slide to the coresponding dot pressed
        showSlides(slideIndex = e.target.id)
    })
}

changeSlide(1) // changes the slide by 1

// event handler for back button
document.querySelector('.prev').addEventListener('click', function(){
    changeSlide(-1) // changes the slide by -1
})

// event handler for next button
document.querySelector('.next').addEventListener('click', function(){
    changeSlide(1) // changes the slide by 1
})

function autoSlideChange(){
    changeSlide(1) // changes the slide by 1
}

function changeSlide(n){
    // changes the slide by n
    showSlides(slideIndex += n)
}

function showSlides(n){
    // clears the timer to make sure it dosent repeat too soon
    clearTimeout(timer)

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    // hides all the slides
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }

    // removes the active class from all the dots
    for (let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }

    // shows the current slide and activates the dot asosiated with that slide
    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += " active"

    // starts a timer to change the slide in 3 seconds
    timer = setTimeout(autoSlideChange, 3000)
}