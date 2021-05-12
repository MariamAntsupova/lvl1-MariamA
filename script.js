const burgerMenu = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        });

    });
}

burgerMenu();

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[counter].clientWidth;


nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 3) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= carouselImages.length - 7) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transition', () => {
    if (carouselImages[counter].id === 1) {
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 5) {
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var closeBtn = document.getElementsByClassName("close")[0];


btn.addEventListener('click', () =>{
  modal.style.display = "block";
})
closeBtn.addEventListener('click', () =>{
  modal.style.display = "none";
})
window.addEventListener('click', (event) =>{
  if (event.target == modal) {
    modal.style.display = "none";
  }
})
