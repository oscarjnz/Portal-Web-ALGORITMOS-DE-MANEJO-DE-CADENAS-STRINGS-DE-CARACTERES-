document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.createElement("button");
    themeToggle.id = "theme-toggle";
    themeToggle.innerText = "🌙 Modo Oscuro";
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.innerText = "☀️ Modo Claro";
        } else {
            themeToggle.innerText = "🌙 Modo Oscuro";
        }
    });
});
