const hamburgerMenuBtn = document.querySelector('#hamburger-menu-btn')
const navList = document.querySelector('.nav-list')
const nav = document.querySelector('.nav')
const socialMediaLinks = document.querySelector('#social-media-links')
const arrowScrollUpBtn = document.querySelector('#arrow-scroll-up-btn')

hamburgerMenuBtn.addEventListener('click', () => {
    hamburgerMenuBtn.classList.toggle('hamburger-menu-btn-active')
    navList.classList.toggle('nav-list-active')
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburgerMenuBtn.classList.remove('hamburger-menu-btn-active')
        navList.classList.remove('nav-list-active')
    }
})

window.addEventListener('scroll', () => {
    nav.classList.toggle('nav-active', scrollY > 0)
    socialMediaLinks.classList.toggle('social-media-links-inactive', scrollY > 0)
    arrowScrollUpBtn.classList.toggle('arrow-scroll-up-btn-active', scrollY > 300)
})

document.querySelectorAll('.nav-list').forEach(n => n.addEventListener('click', () => {
    hamburgerMenuBtn.classList.remove('hamburger-menu-btn-active')
    navList.classList.remove('nav-list-active')
}))


arrowScrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    })
})

