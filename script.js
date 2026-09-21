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

    let name = document.getElementById("customerName").value.trim();
    let phone = document.getElementById("customerPhone").value.trim();
    let address = document.getElementById("customerAddress").value.trim();

    if (name === "") {

        alert("Please enter your name.");

        return;
    }

    if (phone === "") {

        alert("Please enter your phone number.");

        return;
    }

    if (phone.length < 10) {

        alert("Please enter a valid phone number.");

        return;
    }

    if (address === "") {

        alert("Please enter your delivery address.");

        return;
    }

    alert(
        "🎉 Order placed successfully!\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Address: " + address
    );

    cart = [];

    updateCart();

    document.getElementById("customerName").value = "";
    document.getElementById("customerPhone").value = "";
    document.getElementById("customerAddress").value = "";

    closeCart();
}

function scrollToMenu() {

    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}

function imageError(image) {

    image.style.display = "none";

    image.parentElement.style.background = "#fff0e8";

    image.parentElement.style.display = "flex";

    image.parentElement.style.alignItems = "center";

    image.parentElement.style.justifyContent = "center";

    image.parentElement.innerHTML = "🍽️";
}
