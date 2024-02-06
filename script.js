// Smooth scrolling for navigation links
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Perform form validation
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  // Perform form submission (You can modify this code to suit your needs)
  // Here, we're just logging the form data to the console
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Clear form fields after submission
  contactForm.reset();
});
