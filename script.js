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
const signInLink = document.querySelector(".sign-in-link");
const loginForm = document.querySelector(".login-form");

signInLink.addEventListener("mouseenter", function() {
    loginForm.style.display = "block";
});

signInLink.addEventListener("mouseleave", function() {
    loginForm.style.display = "none";
});
