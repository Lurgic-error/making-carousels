let slides = document.getElementsByClassName('carousel__item')

let totalSlides = slides.length

let position = 0

let prevBtn = document.getElementById('prev__btn')

let nextBtn = document.getElementById('next__btn')


setInterval(()=>{
    nextSlide()
},3000)

prevBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('prev btn')
    prevSlide()
})

nextBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('next btn')
    nextSlide()
})

function updateSlide() {
    for (let slide of slides) {
        slide.classList.remove('carousel__item--visible')
        slide.classList.add('carousel__item--hidden')
    }
    slides[position].classList.add('carousel__item--visible')
}

function nextSlide() {
    console.log('position', position)
    if (position === totalSlides - 1) {
        position = 0
    } else {
        position++
    }
    updateSlide()
}

function prevSlide() {
    console.log('position', position)
    if (position === 0) {
        position = 0
    } else {
        position--
    }
    updateSlide()
}