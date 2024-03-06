// JavaScript for product animation
const productContainer = document.getElementById("productContainer");
const products = document.querySelectorAll(".product");

let position = 0;
const animationSpeed = 1; // Adjust speed as needed

function moveProducts() {
    position -= animationSpeed;
    productContainer.style.transform = `translateX(${position}px)`;

    // Reset position when the first product moves out of view
    if (products.length > 0 && products[0].getBoundingClientRect().right < 0) {
        position = 0;
        productContainer.style.transform = `translateX(${position}px)`;
    }

    requestAnimationFrame(moveProducts);
}

moveProducts();

// JavaScript for Sign-in Form
document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("signInUsername").value;
    var password = document.getElementById("signInPassword").value;
    // Do something with username and password
    console.log("Username: " + username + ", Password: " + password);
});

// JavaScript for Checkout Button
document.getElementById("checkoutBtn").addEventListener("click", function() {
    // Perform checkout action
    alert("Proceeding to Checkout...");
});
