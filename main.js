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



// Need to retry = Fixed!!!
// When Scrolling down, I want the header to blur so it is more accessible for the users
// Is there such a thing as listening to a scroll? 
const scrolledBlur = () => {
    const header = document.querySelector('.header');
    // Using ternary operator
    // Error fixed, needed to insert the XYZ direction of the scroll therefore, it wasn't working during the first intial try
    this.scrollY >= 50 ? header.classList.add('scrolled-header') 
                        : header.classList.remove('scrolled-header')
}
// In the window
window.addEventListener('scroll', scrolledBlur)



// Making sure that the back-to-top button only appears when it reaches certain the next section
const scrollToTop = () => {
    const backToTop = document.querySelector('.back-to-top')

    // Insert Y direction of the scroll
    this.scrollY >= 350 ? backToTop.classList.add('show-back-to-top') 
                        : backToTop.classList.remove('show-back-to-top')
}
window.addEventListener('scroll', scrollToTop);


// Create an active link color whatever the section display is in for the nav/header bar
// get all sections and only target their id since id's are unique to themselves and cannot be repeated
const allSections = document.querySelectorAll('section[id]')

const scrollCurrent = () => {
    const scrollDownwards = window.scrollY

    // creating a foreach since I want this to occur for each sections in the body
    allSections.forEach(current => {
        const sectionHeight = current.offsetHeight, //gets the height of the current section
                sectionTop = current.offsetTop - 60,
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if(scrollDownwards > sectionTop && scrollDownwards <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link-nav')
        } else {
            sectionClass.classList.remove('active-link-nav')
        }
        
    })
}
window.addEventListener('scroll', scrollCurrent)