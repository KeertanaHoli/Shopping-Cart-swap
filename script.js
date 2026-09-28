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
function renderCart(){

    cartBody.innerHTML = "";

    cart.forEach(function(product){

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>₹${product.price}</td>
            <td>${product.quantity}</td>
            <td>₹${product.price * product.quantity}</td>
            <td>Actions</td>
        `;

        cartBody.appendChild(row);
    });
}