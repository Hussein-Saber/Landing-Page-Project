/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

//selecting navigation bar by element ID
const navBarListVar = document.getElementById('navbar__list');

//selecting all sections on html and new entry sections by TagName
const sectionsVar = document.querySelectorAll('section');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function addSections2NavList() {

    // create empty fragment container
    const fragment = document.createDocumentFragment();

    // for loop parameter section tagName and all sections queryselectorall save on constant sectionsVar 
    for (section of sectionsVar)  {

        // define on scope section variable
        const sectionId = section.getAttribute("id");

        // create li element (list items varaible) to reuse in for loop
        const menuListLi = document.createElement('li');
        //create anchor element to reuse in forr loop
        const menuListLiAddAnchor = document.createElement('a');
        // add selected id to anchor using .href
        menuListLiAddAnchor.href = `#${sectionId}`;
        // adding data-nav to use it as section name by innerHTML method
        menuListLiAddAnchor.innerHTML = section.getAttribute('data-nav'); /*section name link*/
        /* add menu__link class , className already-made defined on style.css from starter code*/
        menuListLiAddAnchor.classList.add('menu__link');
        // using appendChild method to insert anchor element inside li element
        menuListLi.appendChild(menuListLiAddAnchor);
        // using appendChild method to insert li element to empty fragment
        fragment.appendChild(menuListLi);
    };

    // insert li fragment to menu list on navigation bar and will add th function its self to the end of this page js to call it and execute it
    navBarListVar.appendChild(fragment);
};


// function Add class 'active' to sectoin
 
function addactiveClassSection(section) {
    //select section id
    const activeSectionId = section.getAttribute('id');
    //add (your-active-class) class to section
    document.querySelector(`#${activeSectionId}`).classList.add('your-active-class');
}

// function remove class 'active' to sectoin

function removeactiveClassSection(section) {
    //select section id
    const activeSectionId = section.getAttribute('id');
    //remove (your-active-class) class to section
    document.querySelector(`#${activeSectionId}`).classList.remove('your-active-class');
}

// function detect conditions to call add active class function or to call remove active function

function activeClassCondition() {
    // using foreach loop sectionVar global variable = queryselectorall of sections on Dom
    sectionsVar.forEach((section) => {
        
        // sefine getBouncingClientRect method on variable to viewport for section scope
        let sectionOnView = section.getBoundingClientRect();
        // adding function condtions to execute getBouncingClientRect for section scope equal or less than 120 from top or 120 from bottom execute add active class to section element else remove it on the following else statement
        if (sectionOnView.top <= 120 && sectionOnView.bottom >= 120) {
            addactiveClassSection(section);
        } else {
            removeactiveClassSection(section);
        }
    }

    );

}

// add event listener document to excute activeClassCondition function to add or remove active class on sections element
document.addEventListener('scroll', activeClassCondition);



//check section is being viewed in view or not



// adding Section Active State funtion to set/add active class and remove it




// Scroll to anchor ID using scrollTO event

// add smoth style on css style sheet at the end of the css file


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// call add section to navigation bar function here to execute fire
addSections2NavList();

// adding event listener on DOM when scrollong excute section add or remove active class funtion to fire here 
document.addEventListener('scroll', sectionactiveState);

