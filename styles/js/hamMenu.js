document.addEventListener("DOMContentLoaded", function () {
    const hamMenu = document.querySelector(".hamMenu");
    const navItems = document.querySelector(".navItems");
    const closeMenu = document.querySelector(".closeMenu");
  
    hamMenu.addEventListener("click", function () {
      navItems.classList.toggle("show");
    });
  
    closeMenu.addEventListener("click", function () {
      navItems.classList.remove("show");
    });
  });