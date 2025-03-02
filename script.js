document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.createElement("button");
    themeToggle.id = "theme-toggle";
    document.body.appendChild(themeToggle);

    // Comprobar si el usuario tenía el modo oscuro activado
    const modoOscuroGuardado = localStorage.getItem("modoOscuro");

    if (modoOscuroGuardado === "activado") {
        document.body.classList.add("dark-mode");
        themeToggle.innerText = "☀️ Modo Claro";
    } else {
        themeToggle.innerText = "🌙 Modo Oscuro";
    }

    // Evento para cambiar el modo y guardarlo en localStorage
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("modoOscuro", "activado");
            themeToggle.innerText = "☀️ Modo Claro";
        } else {
            localStorage.setItem("modoOscuro", "desactivado");
            themeToggle.innerText = "🌙 Modo Oscuro";
        }
    });
});
