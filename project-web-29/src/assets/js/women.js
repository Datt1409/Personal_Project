import products from "./products";
import "../css/style.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { toggleBarIcon } from "./main.js";

toggleBarIcon();

// Rendering Products

const generateProduct = () => {
  const shop = document.getElementById("shop");
  shop.innerHTML = `<div class="container">
  <div class="row"></div>
  </div>`;
  const row = shop.querySelector(".row");
  return (row.innerHTML = products
    .map((product) => {
      let { id, title, name, price, image, category } = product;
      if (category !== "Women") return "";
      return `<div class=" col-lg-3 col-md-4 col-6" >
   <div id=${id} class="product ${title}">
     <img src="${image}" alt="${title} ${name}" />
    <div class="add-wrapper">
     <button id=${id} class="add-to-cart">Add to cart</button>
   </div>
     <div class="description">
      <span>${title}</span>
      <h5>${name}</h5>
      <h4>${price} đ</h4>
     </div>
  </div>
 </div>`;
    })
    .join(""));
};
generateProduct();

// Link to the single product
const productList = document.querySelectorAll(".product");
productList.forEach((product) => {
  const img = product.querySelector("img");
  img.addEventListener("click", function () {
    window.location.href = `single-product.html?${product.id}`;
  });
});

// Filter product
function getSelectedValue() {
  let selectValue = document.querySelector("#product-filter");
  selectValue.addEventListener("change", function () {
    const category = this.value;
    console.log(category);
    productList.forEach(function (product) {
      console.log(product.classList.contains(category));
      if (category === "all" || product.classList.contains(category)) {
        product.parentElement.style.display = "block";
      } else {
        product.parentElement.style.display = "none";
      }
    });
  });
}
getSelectedValue();

let addToCart = () => {
  const addBtn = document.querySelectorAll(".add-to-cart");
  let cartQuantity = document.querySelector(".cart-quantity");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let result = 0;
  for (let item of cart) {
    result += item.quantity;
  }
  addBtn.forEach((btn) => {
    const parent = btn.closest(".product");
    btn.addEventListener("click", () => {
      const id = parent.id;
      console.log(typeof id);
      const index = cart.findIndex((obj) => obj.id === id);
      if (index !== -1) {
        cart[index].quantity++;
      } else {
        cart.push({
          id: id,
          quantity: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      result++;
      result < 10
        ? (cartQuantity.innerText = result)
        : (cartQuantity.innerText = 9 + "+");
    });
  });
  result < 10
    ? (cartQuantity.innerText = result)
    : (cartQuantity.innerText = 9 + "+");
};
addToCart();
