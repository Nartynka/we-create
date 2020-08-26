(() => {
    const button = document.querySelector(".hamburger");
    const menu = document.querySelector(".nav");

    const toggleClass = () => {
        menu.classList.toggle("nav--open");
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();