javascript
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});

// Show or hide back-to-top button based on scroll position
window.addEventListener('scroll', () => {
     const backToTopButton = document.getElementById('backToTop');
     if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
         backToTopButton.style.display = "block";
     } else {
         backToTopButton.style.display = "none";
     }
});

// Scroll to top when the button is clicked
document.getElementById('backToTop').addEventListener('click', () => {
     window.scrollTo({top:0, behavior:'smooth'});
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
     document.body.classList.toggle('dark-mode');
});