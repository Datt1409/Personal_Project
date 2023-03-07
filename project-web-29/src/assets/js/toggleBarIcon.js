export const toggleBarIcon = () => {
  const barIcon = document.querySelector(".bar-icon");
  const navBar = document.getElementById("navbar");
  const close = document.getElementById("close");
  const infoForm = document.getElementById("info-form");

  if (barIcon) {
    barIcon.addEventListener("click", () => {
      infoForm.style.display = "none";
      navBar.classList.add("active");
    });
  }

  if (close) {
    close.addEventListener("click", (e) => {
      navBar.classList.remove("active");
      infoForm.style.display = "flex";
      e.preventDefault();
    });
  }
};
