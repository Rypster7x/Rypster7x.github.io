<<<<<<< HEAD
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
=======
async function getOrders() {
    const response = await fetch('https://tostibackend6.studiomaid.nl/orders', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'c5402a68a4d876b841e577848ecd120287368ca7e209ff5bfbdb1e80cdc2f4ff'
        }
    });
    const orders= await response.json();
    console.log(orders);
}
>>>>>>> 2fadead7f62a7474fc9c041c2cecff9123952a4e

getOrders();

// console.log("Request sent for orders.", {
//     msg: "HELLO",
//     time: new Date().toISOString(),
//
// });

<<<<<<< HEAD
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
=======

// document.addEventListener("DOMContentLoaded", function() {
//     console.log("DOM fully loaded and parsed");
// });
>>>>>>> 2fadead7f62a7474fc9c041c2cecff9123952a4e
