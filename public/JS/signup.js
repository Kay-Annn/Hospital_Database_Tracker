  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const role = document.querySelector('#role-signup').value.trim();
    const roleOptions = document.querySelector('#roleOptions-signup').value.trim;  
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && role && email && password) {
      const response = await fetch('/api/users/signupUser', {
        method: 'POST',
        body: JSON.stringify({ username, role, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
       
      }
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  