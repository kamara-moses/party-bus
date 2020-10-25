// target icon
const toggleCollapse = document.getElementsByClassName('toggle-collapse')[0]

// target menu
const navLinks = document.getElementsByClassName('nav-links')[0]

// event
toggleCollapse.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})