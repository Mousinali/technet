const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const backdrop = document.getElementById("backdrop");
const body = document.body;

openBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    backdrop.classList.remove("opacity-0", "invisible");
    backdrop.classList.add("opacity-100", "visible");

    // Disable scrolling
    body.classList.add("overflow-hidden");
});

closeBtn.addEventListener("click", closeMenuHandler);
backdrop.addEventListener("click", closeMenuHandler);

function closeMenuHandler() {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
    backdrop.classList.add("opacity-0", "invisible");
    backdrop.classList.remove("opacity-100", "visible");

    // Re-enable scrolling
    body.classList.remove("overflow-hidden");
}
