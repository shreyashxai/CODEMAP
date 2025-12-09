const BASE_URL = 'http://localhost:8989/api/user';

// Toggle Signup / Signin
document.querySelector('.img-btn').addEventListener('click', () => {
  document.querySelector('.cont').classList.toggle('s-signup');
});

// ========== SIGNUP ==========
document.getElementById('signUpForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('signUpName').value.trim();
  const email = document.getElementById('signUpEmail').value.trim();
  const password = document.getElementById('signUpPassword').value;
  const confirmPassword = document.getElementById('signUpConfirmPassword').value;

  // Basic checks
  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Send data to backend
  try {
    const res = await fetch(BASE_URL + '/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName: name, email, password })
    });

    if (res.ok) {
      alert("Signup Successful!");
      window.location.href = 'signUpForm.html';
    } else {
      alert("Signup Failed");
    }
  } catch (err) {
    alert("Error connecting to server");
  }
});

// ========== LOGIN ==========
document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    const res = await fetch(BASE_URL + '/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (res.ok) {
      const user = await res.json();
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      alert("Login successful!");
      window.location.href = 'homePageAfterLogin.html';
    } else {
      alert("Invalid email or password");
    }
  } catch (err) {
    alert("Error connecting to server");
  }
});
