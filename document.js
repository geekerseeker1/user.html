document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var username = document.getElementById("username").value;
    var profilepicture = document.getElementById("profilepicture").value;
  
    // Create user details object
    var userDetails = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      profilepicture: profilepicture
    };
  
    // Save user details to localStorage
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  
    // Redirect to user details page
    window.location.href = "userdetails.html";
  });
  