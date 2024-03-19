function signup() {
    var username = document.getElementById("signup-username").value;
    var password = document.getElementById("signup-password").value;
  
  
    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Signed up successfully!");
    } else {
        alert("Please fill all fields.");
    }
  }
  
  
  function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
  
  
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
  
    /*fetch(){

    }*/
  
    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
  }
  