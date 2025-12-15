const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.getElementById('cart-count');
const cartPopup = document.getElementById('cart-popup');
const cartItemsList = document.getElementById('cart-items');
const closeCart = document.getElementById('close-cart');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

let cart = [];

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const itemName = button.parentElement.querySelector('.item-header span').textContent;
        cart.push(itemName);
        updateCart();
    });
});

function updateCart() {
    cartCount.textContent = cart.length;
    cartItemsList.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item}
            <button class="remove-btn" data-index="${index}">X</button>
        `;
        cartItemsList.appendChild(li);
    });

    document.querySelectorAll('.remove-btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {

            const index = e.target.getAttribute('data-index');
            cart.splice(index, 1);



            updateCart();
        });
    });
}

// Toggle cartpopup
cartIcon.addEventListener('click', () => {
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
});

closeCart.addEventListener('click', () => {
    cartPopup.style.display = 'none';
});
