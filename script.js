const navLinks = document.querySelectorAll(".main-nav a[href^='#']");

navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


const resurseItems = document.querySelectorAll(".resursa-item");

resurseItems.forEach(item => {
    item.addEventListener("click", () => {
        resurseItems.forEach(other => other.classList.remove("focus-resursa"));
        item.classList.add("focus-resursa");
    });
});
