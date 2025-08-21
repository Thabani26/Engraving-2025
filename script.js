let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
}

function displayCart() {
  let cartItems = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");

  if (!cartItems || !cartTotal) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    let div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <p>${item.product} - R${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(div);
    total += item.price;
  });

  cartTotal.textContent = "R" + total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

displayCart();
