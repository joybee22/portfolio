// Theme Switcher
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  if (!name || !email || !message) {
    status.textContent = 'Please fill in all fields.';
    status.style.color = 'red';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    status.textContent = 'Please enter a valid email.';
    status.style.color = 'red';
  } else {
    status.textContent = 'Message sent! (Not really, just a demo 😄)';
    status.style.color = 'green';
    this.reset();
  }
});
