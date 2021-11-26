const iconClose = document.getElementById('close-contact');
const navSide = document.getElementById('navside');
const iconMenu = document.getElementById('go');

iconClose.addEventListener('click', function(){
    navSide.style.display = "none";
})

iconMenu.addEventListener('click', function(){
    navSide.style.display = "block";
})
