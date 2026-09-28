let cart = [];
const form = document.getElementById("productForm");
const cartBody = document.getElementById("cartBody");
const message = document.getElementById("message");
form.addEventListener("submit", function(event){
    event.preventDefault();
});
const name = document.getElementById("productName").value.trim();
const price = Number(document.getElementById("productPrice").value);
const quantity = Number(document.getElementById("productQuantity").value);
const category = document.getElementById("category").value;

if(!name || price <= 0 || quantity <= 0 || !category){
    message.textContent = "Please enter valid product details.";
    return;
}

message.textContent = "";
const product = {
    name,
    price,
    quantity,
    category
};

cart.push(product);