let cart = [];

function addToCart(name, price) {

    let item = {
        name: name,
        price: price
    };

    cart.push(item);

    updateCart();

    alert(name + " added to cart!");
}

function updateCart() {

    let cartItems = document.getElementById("cartItems");
    let cartCount = document.getElementById("cartCount");
    let total = document.getElementById("total");

    cartItems.innerHTML = "";

    let totalPrice = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;
    }

    for (let i = 0; i < cart.length; i++) {

        totalPrice = totalPrice + cart[i].price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div>
                    <h4>${cart[i].name}</h4>
                    <p>₹${cart[i].price}</p>
                </div>

                <button
                    class="remove-button"
                    onclick="removeItem(${i})">
                    Remove
                </button>

            </div>
        `;
    }

    cartCount.textContent = cart.length;
    total.textContent = totalPrice;
}

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}

function openCart() {

    document.getElementById("cartBox").classList.add("active");
}

function closeCart() {

    document.getElementById("cartBox").classList.remove("active");
}

function placeOrder() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    alert("🎉 Order placed successfully!");

    cart = [];

    updateCart();

    closeCart();
}

function scrollToMenu() {

    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}
