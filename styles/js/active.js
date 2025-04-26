        
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navItems ul li a");
        
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
                        
            navLinks.forEach(l => l.classList.remove("active"));
        
                        
            this.classList.add("active");
        });
    });
});
      