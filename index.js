

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //Burger animation
        burger.classList.toggle('toggle');
    });
}

const logoSpin = () => {
    const cardImg = document.querySelector('.card-img');
    
    cardImg.addEventListener('click', () => {

        //Toggle card-img
        //cardImg.classList.toggle('card-img-active');

        //Animate card-img
        cardImg.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //Burger animation
        cardImg.classList.toggle('toggle');
    })
}

const app = () => {
    navSlide();
    logoSpin();
}

app();

