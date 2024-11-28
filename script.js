document.querySelector('.btn-submit').addEventListener('click', () => {
    const emailInput = document.querySelector('.email-form input');
    if (emailInput.value) {
      alert(`Thank you for signing up with ${emailInput.value}!`);
    } else {
      alert('Please enter a valid email address.');
    }
  });
  