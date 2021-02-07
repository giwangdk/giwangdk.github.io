const icon = document.querySelector('.navbar-toggler');
const navLinks = document.querySelector('#navbarSupportedContent');

icon.addEventListener('click', () =>{
    navLinks.classList.toggle('open');
})