const products = [
  {
    id: "1",
    name: "Iphone 16 Pro Max 256GB",
    price: "USD 1300.00",
    image: "../images/iphone.png",
    link: "../html/description.html?product=1",
    description: "iPhone 16 Pro Max with Super Retina XDR display and A18 Bionic chip.",
    inCart: 0,
  },
  {
    id: "2",
    name: "Iphone 15 Pro Max",
    price: "USD 1100.00",
    image: "../images/iphone15.png",
    link: "../html/description.html?product=2",
    description: "iPhone 15 Pro Max with A17 Bionic chip and advanced camera system.",
    inCart: 0,
  },
  {
    id: "3",
    name: "AirPods Pro 2",
    price: "USD 299.00",
    image: "../images/airpods.png",
    link: "../html/description.html?product=3",
    description: "AirPods Pro (2nd generation) with Active Noise Cancellation.",
    inCart: 0,
  },
  {
    id: "4",
    name: "Apple Watch Series 10 45mm",
    price: "USD 299.00",
    image: "../images/applewatch.jpg",
    link: "../html/description.html?product=4",
    description: "Apple Watch Series 10 with advanced health monitoring features.",
    inCart: 0,
  }, 
  {
    id: "7",
    name: "Samsung Ultra S24",
    price: "USD 1300.00",
    image: "../images/samsung.webp",
    link: "../html/description.html?product=7",
    description: "Samsung Galaxy S24 Ultra with advanced AI features.",
    inCart: 0
  },
  {
    id: "8",
    name: "Iphone 14 pro max",
    price: "USD 1000.00",
    image: "../images/iphone14.webp",
    link: "../html/description.html?product=8",
    description: "iPhone 14 Pro Max with Dynamic Island and improved battery life.",
    inCart: 0
  },
  {
    id: "9",
    name: "Anker PowerBank 10000",
    price: "USD 30.00",
    image: "../images/anker-powercore-10000.png",
    link: "../html/description.html?product=9",
    description: "Anker PowerCore 10000mAh power bank for fast charging on the go.",
    inCart: 0
  },
  {
    id: "13",
    name: "Airpods 2nd Generation",
    price: "USD 150.00",
    image: "../images/airpods2.png",
    link: "../html/description.html?product=13",
    description: "Apple AirPods (2nd Gen) with seamless Bluetooth connectivity.",
    inCart: 0
  },
  {
    id: "16",
    name: "Samsung Ultra S23",
    price: "USD 1000.00",
    image: "../images/s23.webp",
    link: "../html/description.html?product=16",
    description: "Samsung Galaxy S23 Ultra with top-tier camera system.",
    inCart: 0
  },
  {
    id: "19",
    name: "Samsung Galaxy A55 Black",
    price: "USD 600.00",
    image: "../images/samsung a55.png",
    link: "../html/description.html?product=19",
    description: "Samsung Galaxy A55 with long-lasting battery life.",
    inCart: 0
  }
  ];
  
  // Function to get the product ID from the URL query parameter
  function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("product"); // Returns the value of the "product" parameter (e.g., "1")
  }
  
  // Function to display product details
  function displayProductDetails() {
    const descDiv = document.getElementById("productDescription");
    const productId = getProductIdFromUrl();
  
    // Find the product with the matching ID
    const product = products.find((p) => p.id === productId);
  
    if (product) {
      // Create HTML structure for the product details
      const productHTML = `
        <div class="product">
          <div class="photo">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="details">
            <h2>${product.name}</h2>
            ${product.description ? `<p>${product.description}</p>` : ""} <!-- Handle missing description -->
            <h5>${product.price}</h5>
            <button type="submit" class="add-to-cart">Add to Cart</button>
          </div>
        </div>
      `;
  
      // Insert the product HTML into the desc div
      descDiv.innerHTML = productHTML;
  
      // Add event listener to the "Add to Cart" button
      const addToCartButton = document.querySelector(".add-to-cart");
      addToCartButton.addEventListener("click", () => {
        addToCart(product);
      });
    } else {
      // If the product is not found, display an error message
      descDiv.innerHTML = "<p>Product not found.</p>";
    }
  }

  // Call the function to display product details when the page loads
  window.onload = displayProductDetails;
  const productContainer = document.getElementById('productContainer');

   // Get the search bar  elements
const searchBar = document.getElementById('searchBar');

// Function to display products
function displayProducts(productsToDisplay) {
  // Clear the container first
  productContainer.innerHTML = '';

  // Loop through each product and create the HTML structure dynamically
  productsToDisplay.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('oneProduct');

    const productLink = document.createElement('a');
    productLink.href = product.link;

    const productContent = document.createElement('div');
    
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const productPrice = document.createElement('h4');
    productPrice.textContent = product.price;

    // Append elements in the correct order
    productContent.appendChild(productImage);
    productContent.appendChild(productName);
    productContent.appendChild(productPrice);
    productLink.appendChild(productContent);
    productDiv.appendChild(productLink);

    // Append the product to the container
    productContainer.appendChild(productDiv);
  });
}

// Function to filter products based on search input
function filterProducts() {
  const query = searchBar.value.toLowerCase(); // Get the search query and convert it to lowercase

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(query) ;
  });

  displayProducts(filteredProducts); // Display the filtered products
}

// Event listener to trigger the search when the user types
searchBar.addEventListener('input', filterProducts);

// Initially display all products
displayProducts(products);
