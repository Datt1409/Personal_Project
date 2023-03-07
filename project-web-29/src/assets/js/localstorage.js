export function addtoStorage(cart) {
  // let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const addBtn = document.querySelectorAll(".add-to-cart");
  let cartQuantity = document.querySelector(".cart-quantity");
  let result = 0;
  for (let item of cart) {
    result += item.quantity;
  }
  addBtn.forEach((btn) => {
    const parent = btn.closest(".product");
    btn.addEventListener("click", () => {
      console.log(parent);
      let id = parent == null ? btn.id : parent.id;
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
}
