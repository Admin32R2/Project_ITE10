
//Nav Bar script
/* function seetActiveLink(event) {
    const links = document.querySelectorAll('.top_nav a');//to get all the anchor tags that are eithin the scope of the top nav
    links.forEach(link=> link.classList.remove('active')); //to remove current active links 

    event.target.classList.add('active'); //add active to the clicked link

  }

  const navLinks = document.querySelectorAll('.top_nav a');
  navLinks.forEach(link => link.addEventListener('click', seetActiveLink)); */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////  
//script for stuff about me
// Select all anchor tags within the 'My_Interest' container
const nav02Links = document.querySelectorAll('.My_Interest a');
const contentDivs = document.querySelectorAll('.content-div');

// Add click event listener to each link
nav02Links.forEach(link => link.addEventListener('click', toggleActiveLink));

// Function to toggle the 'active' class and corresponding div visibility
function toggleActiveLink(event) {
  event.preventDefault(); // Prevent default anchor behavior
  const clickedLink = event.target; // Get the clicked link
  const targetDivId = clickedLink.getAttribute('data-target'); // Get the target div ID
  const targetDiv = document.getElementById(targetDivId);

  // Check if the clicked link is already active
  if (clickedLink.classList.contains('active')) {
    clickedLink.classList.remove('active'); // Deactivate the clicked link
    targetDiv.style.display = 'none'; // Hide the corresponding div
  } else {
    // Deactivate all links and hide all content divs
    nav02Links.forEach(link => link.classList.remove('active'));
    contentDivs.forEach(div => div.style.display = 'none');

    // Activate the clicked link and show the corresponding div
    clickedLink.classList.add('active');
    targetDiv.style.display = 'block';
  }

  
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* This code checks the navigation buttons and from the divs in which to select to show or hide  */
const navLinks = document.querySelectorAll('.top_nav a');
const contentDivs02 = document.querySelectorAll('.contacts, .about, .Proff');

// Add click event listener to each link
navLinks.forEach(link => link.addEventListener('click', toggleActiveLink01));

// Function to toggle the 'active' class and corresponding div visibility
function toggleActiveLink01(event) {
  event.preventDefault(); // Prevent default anchor behavior
  const clickedLink01 = event.target; // Get the clicked link
  const targetDivId11 = clickedLink01.getAttribute('data-target'); // Get the target div ID
  const targetDiv22 = document.getElementById(targetDivId11);

  // Check if the clicked link is already active
  if (clickedLink01.classList.contains('active')) {
    clickedLink01.classList.remove('active'); // Deactivate the clicked link
    targetDiv22.style.display = 'none'; // Hide the corresponding div
  } else {
    // Deactivate all links and hide all content divs
    navLinks.forEach(link => link.classList.remove('active'));
    contentDivs02.forEach(div22 => div22.style.display = 'none');

    // Activate the clicked link and show the corresponding div
    clickedLink01.classList.add('active');
    targetDiv22.style.display = 'block';
  }

  
} 


/* this code make the home page as default during startup */
const navButtons = document.querySelectorAll('.default');
const contentDivs33 = document.querySelectorAll('.Proff');

// Function to show only the targeted section
function showSection(targetId) {
    contentDivs33.forEach(div => {
        div.style.display = div.id === targetId ? 'block' : 'none';
    });
}

// Show Home by default
showSection('Home');

// Add click event to all navbar buttons
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        showSection(targetId);
    });
});



