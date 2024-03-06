// JavaScript for Login Form
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Do something with username and password
    console.log("Username: " + username + ", Password: " + password);
});

// JavaScript for Search Form
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var searchQuery = document.getElementById("searchInput").value;
    // Do something with the search query
    console.log("Search Query: " + searchQuery);
});

// JavaScript for Checkout Button
document.getElementById("checkoutBtn").addEventListener("click", function() {
    // Perform checkout action
    alert("Proceeding to Checkout...");
});
