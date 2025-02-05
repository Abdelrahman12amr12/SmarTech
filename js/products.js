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
    id: "5",
    name: "Apple Watch Ultra 2",
    price: "USD 600.00",
    image: "../images/ultra2.jpg",
    link: "../html/description.html?product=5",
    description: "Apple Watch Ultra 2 with rugged design and long battery life.",
    inCart: 0,
  },
  {
    id: "6",
    name: "Huawei Watch Fit 3",
    price: "USD 299.00",
    image: "../images/huaweiwatch.jpg",
    link: "../html/description.html?product=6",
    description: "Huawei Watch Fit 3 with fitness tracking and AMOLED display.",
    inCart: 0,
  },
  {
    id: "7",
    name: "Samsung Ultra S24",
    price: "USD 1300.00",
    image: "../images/samsung.webp",
    link: "../html/description.html?product=7",
    description: "Samsung Galaxy S24 Ultra with advanced AI features.",
    inCart: 0,
  },
  {
    id: "8",
    name: "Iphone 14 Pro Max",
    price: "USD 1000.00",
    image: "../images/iphone14.webp",
    link: "../html/description.html?product=8",
    description: "iPhone 14 Pro Max with Dynamic Island and improved battery life.",
    inCart: 0,
  },
  {
    id: "9",
    name: "Anker PowerBank 10000",
    price: "USD 30.00",
    image: "../images/anker-powercore-10000.png",
    link: "../html/description.html?product=9",
    description: "Anker PowerCore 10000mAh power bank for fast charging on the go.",
    inCart: 0,
  },
  {
    id: "10",
    name: "JBL Party Box 200",
    price: "USD 250.00",
    image: "../images/jbl.webp",
    link: "../html/description.html?product=10",
    description: "JBL Party Box 200 with powerful bass and LED light effects.",
    inCart: 0,
  },
  {
    id: "11",
    name: "Spigen Samsung Ultra 23 Phone Case",
    price: "USD 100.00",
    image: "../images/spigen.avif",
    link: "../html/description.html?product=11",
    description: "Spigen phone case for Samsung Ultra 23 with shockproof protection.",
    inCart: 0,
  },
  {
    id: "12",
    name: "Asus Gaming Laptop",
    price: "USD 2000.00",
    image: "../images/laptop.webp",
    link: "../html/description.html?product=12",
    description: "Asus high-performance gaming laptop with RTX graphics.",
    inCart: 0,
  },
  {
    id: "13",
    name: "AirPods 2nd Generation",
    price: "USD 150.00",
    image: "../images/airpods2.png",
    link: "../html/description.html?product=13",
    description: "Apple AirPods (2nd Gen) with seamless Bluetooth connectivity.",
    inCart: 0,
  },
  {
    id: "14",
    name: "AirPods 3rd Generation",
    price: "USD 200.00",
    image: "../images/airpods3.jpg",
    link: "../html/description.html?product=14",
    description: "Apple AirPods (3rd Gen) with Spatial Audio and MagSafe case.",
    inCart: 0,
  },
  {
    id: "15",
    name: "Apple Watch Series 9 45mm",
    price: "USD 420.00",
    image: "../images/applewatch9.jpg",
    link: "../html/description.html?product=15",
    description: "Apple Watch Series 9 with advanced health tracking.",
    inCart: 0,
  },
  {
    id: "16",
    name: "Samsung Ultra S23",
    price: "USD 1000.00",
    image: "../images/s23.webp",
    link: "../html/description.html?product=16",
    description: "Samsung Galaxy S23 Ultra with top-tier camera system and performance.",
    inCart: 0,
  },
  {
    id: "17",
    name: "Lenovo IdeaPad 14",
    price: "USD 900.00",
    image: "../images/ideapad3.webp",
    link: "../html/description.html?product=17",
    description: "Lenovo IdeaPad 14 for productivity, entertainment, and lightweight performance.",
    inCart: 0,
  },
  {
    id: "18",
    name: "Spigen Case for iPhone 13",
    price: "USD 20.00",
    image: "../images/spigen13.png",
    link: "../html/description.html?product=18",
    description: "Spigen shockproof case for iPhone 13 with slim yet durable design.",
    inCart: 0,
  },
  {
    id: "19",
    name: "Samsung Galaxy A55 Black",
    price: "USD 600.00",
    image: "../images/samsung a55.png",
    link: "../html/description.html?product=19",
    description: "Samsung Galaxy A55 with long battery life and powerful performance.",
    inCart: 0,
  },
  {
    id: "20",
    name: "JBL Party Box 710",
    price: "USD 500.00",
    image: "../images/party710.jpg",
    link: "../html/description.html?product=20",
    description: "JBL Party Box 710 with immersive sound and LED light effects.",
    inCart: 0,
  },
  {
    id: "21",
    name: "SoundCore Anker Rave Speaker",
    price: "USD 100.00",
    image: "../images/rave.webp",
    link: "../html/description.html?product=21",
    description: "Anker Rave Speaker with 24-hour battery life and high-quality sound.",
    inCart: 0,
  },
  {
    id: "22",
    name: "SoundCore Anker Flare 2",
    price: "USD 200.00",
    image: "../images/flare2.webp",
    link: "../html/description.html?product=22",
    description: "Anker Flare 2 with customizable LED light show and 360-degree sound.",
    inCart: 0,
  },
  {
    id: "23",
    name: "Anker Soundcore Life Q23",
    price: "USD 80.00",
    image: "../images/lifeq23.png",
    link: "../html/description.html?product=23",
    description: "Anker Soundcore Life Q23 with hybrid noise cancellation and long battery life.",
    inCart: 0,
  },
  {
    id: "24",
    name: "Anker Soundcore Liberty",
    price: "USD 50.00",
    image: "../images/liberty.jpg",
    link: "../html/description.html?product=24",
    description: "Anker Soundcore Liberty wireless earbuds with deep bass and clear audio.",
    inCart: 0,
  }
];

// Get the search bar  elements
const searchBar = document.getElementById("searchBar");

// Function to display products
function displayProducts(productsToDisplay) {
  productContainer.innerHTML = "";

  // Loop through each product and create the HTML structure dynamically
  productsToDisplay.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("oneProduct");

    const productLink = document.createElement("a");
    productLink.href = product.link;

    const productContent = document.createElement("div");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement("h2");
    productName.textContent = product.name;

    const productPrice = document.createElement("h4");
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
  const query = searchBar.value.toLowerCase();
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(query);
  });
  displayProducts(filteredProducts);
}
searchBar.addEventListener("input", filterProducts);
window.onload = displayProducts(products);
