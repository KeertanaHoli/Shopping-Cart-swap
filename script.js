let cart = [];
const form = document.getElementById("productForm");
const cartBody = document.getElementById("cartBody");
const message = document.getElementById("message");
const subtotalElement = document.getElementById("subtotal");
const taxElement = document.getElementById("tax");
const grandTotalElement = document.getElementById("grandTotal");
const clearCartBtn = document.getElementById("clearCart");
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

    cart.forEach(function(product, index){

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>₹${product.price}</td>
            <td>${product.quantity}</td>
            <td>₹${product.price * product.quantity}</td>
            <td>Actions</td>
            <td>
            <button onclick="increaseQuantity(${index})">+</button>

            <button onclick="decreaseQuantity(${index})">-</button>

            <button onclick="removeItem(${index})">
                Remove
            </button>
            </td>
        `;

        cartBody.appendChild(row);
    });
    const subtotal = calculateSubtotal();

    const tax = calculateTax(subtotal);

    calculateGrandTotal(
        subtotal,
        tax
    );
}
function removeItem(index){

    cart.splice(index,1);

    renderCart();
}
function increaseQuantity(index){

    cart[index].quantity++;

    renderCart();
}
function decreaseQuantity(index){

    if(cart[index].quantity > 1){
        cart[index].quantity--;
    }

    renderCart();
}
function calculateSubtotal(){

    let subtotal = 0;

    cart.forEach(function(product){

        subtotal +=
        product.price * product.quantity;
    });

    subtotalElement.textContent =
    subtotal.toFixed(2);

    return subtotal;
}
function calculateTax(subtotal){

    const tax = subtotal * 0.10;

    taxElement.textContent =
    tax.toFixed(2);

    return tax;
}
function calculateGrandTotal(subtotal,tax){

    grandTotalElement.textContent =
    (subtotal + tax).toFixed(2);
}
clearCartBtn.addEventListener("click", function(){

    cart = [];

    renderCart();
});