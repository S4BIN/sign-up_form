// Select the form and submit button
const form = document.querySelector('form');
const submitBtn = document.querySelector('button[type="submit"]');

// Function to handle form submission
function handleSubmit(e) {
  e.preventDefault();

  // Validate form fields
  const firstName = form.querySelector('#first_name').value.trim();
  const lastName = form.querySelector('#last_name').value.trim();
  const email = form.querySelector('#user_email').value.trim();
  const phoneNumber = form.querySelector('#phone_number').value.trim();
  const password = form.querySelector('#user_password').value.trim();
  const confirmPassword = form.querySelector('#confirm_password').value.trim();

  if (firstName === '') {
    alert('Please enter your first name');
    return;
  }

  if (lastName === '') {
    alert('Please enter your last name');
    return;
  }

  if (email === '') {
    alert('Please enter your email address');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  if (phoneNumber === '') {
    alert('Please enter your phone number');
    return;
  }

  if (!isValidPhoneNumber(phoneNumber)) {
    alert('Please enter a valid phone number');
    return;
  }

  if (password === '') {
    alert('Please enter a password');
    return;
  }

  if (confirmPassword === '') {
    alert('Please confirm your password');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Submit the form data using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    if (this.status === 200) {
      // Success message
      alert('Thank you for signing up!');
    } else {
      // Error message
      alert('An error occurred, please try again later');
    }
  };
  xhr.send(encodeURI(`first_name=${firstName}&last_name=${lastName}&email=${email}&phone_number=${phoneNumber}&password=${password}`));
}

// Function to validate email address
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Function to validate phone number
function isValidPhoneNumber(phoneNumber) {
  const re = /^\d{10}$/;
  return re.test(phoneNumber);
}

// Attach event listener to submit button
submitBtn.addEventListener('click', handleSubmit);