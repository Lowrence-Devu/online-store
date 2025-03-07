document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    const buyNowButtons = document.querySelectorAll('.buy-btn');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', buyNow);
    });
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', addTowishlist);
    });
});

function addToCart(event) {
    const index = event.target.getAttribute('data-index');
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products[index];

    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
}
 

function addTowishlist(event) {
    const index = event.target.getAttribute('data-index');
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const product = products[index];

    const existingProductIndex = wishlist.findIndex(item => item.name === product.name);
    if (existingProductIndex !== -1) {
        wishlist[existingProductIndex].quantity += 1;
    } else {
        product.quantity = 1;
        wishlist.push(product);
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert('Product added to wishlist');
}
function buyNow(event) {
    const index = event.target.getAttribute('data-index');
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products[index];

    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'checkout.html';
}

function search() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const items = document.querySelectorAll('.product-box');

    items.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        if (itemName.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}