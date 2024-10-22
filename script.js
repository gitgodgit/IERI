document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = {
    firstName: this.firstName.value,
    lastName: this.lastName.value,
    email: this.email.value,
    message: this.message.value
  };

  fetch('http://localhost:3000/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => response.text())
  .then(data => {
    console.log('Success:', data);
    document.querySelector('.form-success').style.display = 'block';
    this.reset();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
