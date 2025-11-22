// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});

// Gallery show more functionality
function showMore() {
    const moreImages = document.querySelectorAll('.more-images');
    const showMoreBtn = document.querySelector('.show-more-btn');
    
    moreImages.forEach(image => {
        if (image.style.display === 'flex') {
            image.style.display = 'none';
            showMoreBtn.textContent = 'Show More';
        } else {
            image.style.display = 'flex';
            showMoreBtn.textContent = 'Show Less';
        }
    });
}