document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const destino = this.href;

            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location.href = destino;
            }, 500);
        });
    });
});
