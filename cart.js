// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

// Function to update the cart display on the cart page
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');

    // Clear the current cart display
    cartItemsContainer.innerHTML = '';

    // If the cart is empty
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceContainer.innerText = 'Total: $0.00';
        return;
    }

    // Display all items in the cart
    let totalPrice = 0;
    cart.forEach(item => {
        const itemTotalPrice = item.price * item.quantity;
        totalPrice += itemTotalPrice;

        // Create HTML for the cart item
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <p>${item.name} (x${item.quantity}) - $${itemTotalPrice.toFixed(2)}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Update the total price
    totalPriceContainer.innerText = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartDisplay();
}

// Function to clear the cart
function clearCart() {
    cart = [];
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartDisplay();
}

// Function to handle checkout (you can integrate actual checkout logic here)
function checkout() {
    alert('Proceeding to checkout!');
    // Clear the cart after checkout
    clearCart();
}

// Load and display the cart when the page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();
});
