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

// Now I want to close the nav bar when EACH link is clicked
// Get all the nav link
const navLink = document.querySelectorAll('.nav-link')
// Create an arrow function that will do the following:
// Get the nav menu
// when I get the nav menu remove the show-menu
// Maybe a forloop or for each when the links are clicked I want to repeat the removal of show menu

const navLinkListAction = () => {
    const navMenu = document.querySelector('.nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(linkedItem => linkedItem.addEventListener('click', navLinkListAction));
