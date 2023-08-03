/*==========Show menu==========*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*Validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*Menu hidden*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=========== Remove menu mobile ========== */
const navLink = document.querySelectorAll('.nav-link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Remove the show-menu class when clicking on each nav-link 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*========== Change bg header ==========*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    //add the bg-header class to the header tag when the scroll is greater than 50 vh
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)
/* ========== Gsap animation ==========*/
gsap.from('.home_image1', 1.2, {opacity: 0, y: 200, delay: .1})
gsap.from('.home_data', 1.2, {opacity: 0, y: -60, delay: 1})
