document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("h1, .bor, .card, .paragraf, .para, .description, .description2");

    function checkScroll() {
        elements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            
            if (position < screenHeight * 0.9) {
                element.classList.add("visible");
            }
        });
    }
    
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on page load

    // Smooth Scroll Animation for Navbar Links
    const navbarLinks = document.querySelectorAll(".navbar ul.list li a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});