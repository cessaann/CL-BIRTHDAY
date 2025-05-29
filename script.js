// Get form and attach submit event listener
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent actual form submission

  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  if (username === "chrislee" && password === "08312004") {
    window.location.href = "page1.html"; // redirect if valid
  } else {
    alert("Invalid username or password!");
  }
});

// Toggle password visibility
document.getElementById("togglePassword").addEventListener("click", function () {
  const passwordInput = document.getElementById("password");
  const toggle = this;

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggle.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggle.textContent = "Show";
  }
});
