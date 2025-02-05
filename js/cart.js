function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("product");
}

// Function to display items in the cart
function displayCart() {
  const cartDiv = document.getElementById("cart");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cartItems);
  cartDiv.innerHTML = "";

  if (cartItems.length === 0) {
    cartDiv.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    document.getElementById("total").textContent = "Total: USD 0.00";
    return;
  }

  let total = 0;
  cartItems.forEach((item) => {
    // const numericPrice = parseFloat(item.price.toFixed(2));
    // total += numericPrice * item.inCart;
    total += parseFloat(item.price.replace(/[^\d.-]/g, '') * item.inCart);

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    // Product Image
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;

    // Details Section
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("item-details");

    const title = document.createElement("h3");
    title.textContent = item.name;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Price: ${item.price}`;

    const quantityPara = document.createElement("p");
    quantityPara.textContent = `Quantity: ${item.inCart}`;

    detailsDiv.appendChild(title);
    detailsDiv.appendChild(pricePara);
    detailsDiv.appendChild(quantityPara);

    // Actions Section
    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("item-actions");

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeFromCart(item.id);

    actionsDiv.appendChild(removeBtn);

    itemDiv.appendChild(img);
    itemDiv.appendChild(detailsDiv);
    itemDiv.appendChild(actionsDiv);

    cartDiv.appendChild(itemDiv);
  });

  document.getElementById("total").textContent = `Total: USD ${total.toFixed(
    2
  )}`;
}

// Function to remove an item from the cart
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartCount();
}

// Function to update the cart count (if you show it elsewhere)
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

window.onload = displayCart();
