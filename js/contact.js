const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Perform form validation (dummy validation for demonstration purposes)
    if (name && email && message) {
        // Successful form submission
        alert('Message sent!');
        contactForm.reset();
    } else {
        // Incomplete form
        alert('Please fill in all fields.');
    }
});
