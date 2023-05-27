// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});

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
// portfolio pop-up
$(document).ready(function(){

  $('.gallery').magnificPopup({

      delegate:'a',
      type:'image',
      gallery:{
          enabled:true
      }

  });

});

// JavaScript code for "Go to Top" anchor
const goToTopAnchor = document.querySelector('.go-to-top');

// Show/hide the anchor based on scroll position
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    goToTopAnchor.style.display = 'block';
  } else {
    goToTopAnchor.style.display = 'none';
  }
});

// Scroll to top when the anchor is clicked
function toggleDetails() {
  const additionalDetails = document.getElementById('additionalDetails');
  const expandBtn = document.querySelector('.expand-btn');

  additionalDetails.classList.toggle('show');
  if (additionalDetails.classList.contains('show')) {
    expandBtn.textContent = 'Show Less';
  } else {
    expandBtn.textContent = 'Learn More';
  }
}

function closePopup() {
  const popupBanner = document.querySelector('.popup-banner');
  popupBanner.style.visibility = 'hidden';
}


