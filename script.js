// JavaScript for Retail Gigg website

// JavaScript for product animation
const productContainer = document.getElementById("productContainer");

function createProduct() {
    const product = document.createElement("div");
    product.classList.add("product");

    const img = document.createElement("img");
    // Placeholder image URL from Lorem Picsum
    img.src = `https://picsum.photos/300/200?random=${Math.random() * 1000}`;
    img.alt = "Product Image";
    product.appendChild(img);

    const h2 = document.createElement("h2");
    h2.textContent = "Product";
    product.appendChild(h2);

    const p1 = document.createElement("p");
    p1.textContent = "Description of the product.";
    product.appendChild(p1);

    const p2 = document.createElement("p");
    // Random price between $10 and $100
    const price = (Math.random() * (100 - 10) + 10).toFixed(2);
    p2.textContent = `Price: $${price}`;
    product.appendChild(p2);

    productContainer.appendChild(product);
}

// Create multiple products
for (let i = 0; i < 10; i++) {
    createProduct(); 
}

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
