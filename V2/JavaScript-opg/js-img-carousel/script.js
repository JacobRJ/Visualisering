let slideIndex = 0
var timer
changeSlide(1)

let dots = document.querySelectorAll('.dot')

document.querySelector('.prev').addEventListener('click', function(){
    changeSlide(-1)
})

document.querySelector('.next').addEventListener('click', function(){
    changeSlide(1)
})

for (i of dots){
    i.addEventListener('click', function(e){
        showSlides(slideIndex = e.target.id)
    })
}

function autoSlideChange(){
    changeSlide(1)
}

function changeSlide(n){
    showSlides(slideIndex += n)
}

function showSlides(n){
    clearTimeout(timer)
    
    let slides = document.querySelectorAll('.slides')
    let dots = document.querySelectorAll('.dot')

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }

    for (let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += " active"

    timer = setTimeout(autoSlideChange, 3000)
}