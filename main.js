const navMenu = document.querySelector('.nav-menu');
const navMenuBurger = document.querySelector('.nav-menu-burger');
const navMenuClose = document.querySelector('.nav-menu-close');


// SHOW MENU when button is 'clicked'
// Create an event listener when the burger menu is clicked the nav list will appear
// When it has been clicked I want the list to re-appear on the page
if(navMenuBurger){
    navMenuBurger.addEventListener('click', () => {
        navMenu.classList.add('show-menu'); //This show-menu is edited in the css
    })
}

// CLOSE MENU when x button icon is clicked
// Create an event listener to remove the show-menu from the css so that the nav list will disappear
// When it has been clicked the original home screen should appear
if(navMenuClose){
    navMenuClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu'); 
    })
}