const hamburgerMenu = document.getElementById("hamburger-menu");
const navbar = document.getElementById("navbar");
const blankScreen = document.getElementById("blank-screen");

const navbarHandler = () => {
    if(navbar.classList.contains('-ml-[300px]')) {
        navbar.classList.remove('-ml-[300px]')
        blankScreen.classList.remove('w-0')
        blankScreen.classList.add('w-full')
    } else {
        navbar.classList.add('-ml-[300px]')
        blankScreen.classList.add('w-0')
        blankScreen.classList.remove('w-full')
    }
}

hamburgerMenu.addEventListener('click', () => {
    navbarHandler()
})

blankScreen.addEventListener('click', () => {
    navbarHandler()    
})