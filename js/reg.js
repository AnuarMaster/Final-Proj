document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var password = document.getElementById('password').value;

    if (email === '' || name === '' || surname === '' || password === '') {
      alert('Please fill in all fields.');
      return;
    }

    document.getElementById('registration-form').reset();
  });