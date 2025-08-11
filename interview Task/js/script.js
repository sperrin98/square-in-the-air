const title = document.getElementById('page-title');
const text = title.textContent;
let index = 0;
const speed = 100; // typing speed in ms
const fadeInDuration = 3000;

function typeWriter() {
  if (index < text.length) {
    title.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    // restart after pause
    setTimeout(() => {
      title.textContent = '';
      index = 0;
      typeWriter();
    }, 3000);
  }
}

setTimeout(() => {
  title.classList.add('typing');
  title.textContent = '';
  title.style.visibility = 'visible';
  typeWriter();
}, fadeInDuration);


// form submission handler
document.querySelector('.cta-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const firstName = this.firstName.value.trim();
  const lastName = this.lastName.value.trim();
  const email = this.email.value.trim();

  if (!firstName || !lastName || !email) {
    alert('Please fill out all fields.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert(`Thanks for registering, ${firstName} ${lastName}! We'll reach out at ${email}.`);
  this.reset();
});
