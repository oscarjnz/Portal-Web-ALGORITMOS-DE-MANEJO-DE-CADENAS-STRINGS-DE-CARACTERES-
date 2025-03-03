document.addEventListener("DOMContentLoaded", () => {
    // 🔹 Agregar botón para cambiar entre Modo Oscuro y Modo Claro
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

// Algoritmo 1: Inversión manual de cadenas
function invertirCadenaAlgoritmo(inputString) {
    // Implementación manual del algoritmo de inversión
    let resultado = "";
    
    // Recorrer la cadena de atrás hacia adelante
    for (let i = inputString.length - 1; i >= 0; i--) {
        resultado += inputString[i];
    }
    
    return resultado;
}

// Función para procesar la inversión y mostrar el resultado
function procesarInversion() {
    // Obtener el texto ingresado por el usuario
    const inputText = document.getElementById('inputText1').value;
    
    // Validar entrada
    if (!inputText || inputText.trim() === "") {
        document.getElementById('outputText1').textContent = "Por favor, ingrese un texto para invertir";
        return;
    }
    
    // Procesar el texto con el algoritmo de inversión
    const resultado = invertirCadenaAlgoritmo(inputText);
    
    // Mostrar el resultado en el elemento correspondiente
    const outputElement = document.getElementById('outputText1');
    outputElement.textContent = resultado;
    
    // Aplicar animación de resaltado
    outputElement.classList.remove('highlight');
    void outputElement.offsetWidth; // Forzar reflujo para reiniciar la animación
    outputElement.classList.add('highlight');
}

// Algoritmo 2: Búsqueda de patrones con KMP (Knuth-Morris-Pratt)
function busquedaKMP(texto, patron) {
    // Algoritmo Knuth-Morris-Pratt para búsqueda de patrones
    
    // Función para calcular la tabla de prefijos
    function calcularTablaPrefijos(patron) {
        const m = patron.length;
        let tabla = new Array(m).fill(0);
        
        for (let i = 1, j = 0; i < m; i++) {
            while (j > 0 && patron[i] !== patron[j]) {
                j = tabla[j - 1];
            }
            
            if (patron[i] === patron[j]) {
                j++;
            }
            
            tabla[i] = j;
        }
        
        return tabla;
    }
    
    // Función principal KMP
    function kmp(texto, patron) {
        if (patron === "") return "Patrón vacío encontrado en todas las posiciones";
        
        const n = texto.length;
        const m = patron.length;
        const tablaPrefijos = calcularTablaPrefijos(patron);
        let posiciones = [];
        
        for (let i = 0, j = 0; i < n; i++) {
            while (j > 0 && texto[i] !== patron[j]) {
                j = tablaPrefijos[j - 1];
            }
            
            if (texto[i] === patron[j]) {
                j++;
            }
            
            if (j === m) {
                posiciones.push(i - m + 1);
                j = tablaPrefijos[j - 1];
            }
        }
        
        if (posiciones.length === 0) {
            return "Patrón no encontrado en el texto";
        } else {
            return `Patrón encontrado en posición(es): ${posiciones.join(", ")}`;
        }
    }
    
    return kmp(texto, patron);
}

// Función para procesar la búsqueda de subcadenas
function procesarBusqueda() {
    // Obtener los textos ingresados por el usuario
    const texto = document.getElementById('textoCompleto').value;
    const patron = document.getElementById('patronBusqueda').value;
    
    // Validar entradas
    if (!texto || texto.trim() === "") {
        document.getElementById('outputText2').textContent = "Por favor, ingrese un texto donde buscar";
        return;
    }
    
    // Procesar con el algoritmo KMP
    const resultado = busquedaKMP(texto, patron);
    
    // Mostrar el resultado
    const outputElement = document.getElementById('outputText2');
    outputElement.textContent = resultado;
    
    // Aplicar animación de resaltado
    outputElement.classList.remove('highlight');
    void outputElement.offsetWidth; // Forzar reflujo para reiniciar la animación
    outputElement.classList.add('highlight');
}

// JavaScript para transiciones y animaciones
document.addEventListener('DOMContentLoaded', function() {
    // Código para inicializar cualquier funcionalidad cuando la página carga
    console.log('Página de ejemplos cargada correctamente');
    
    // Permitir envío con Enter en los campos de texto
    document.getElementById('inputText1').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            procesarInversion();
        }
    });
    
    document.getElementById('textoCompleto').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            // Mover el foco al siguiente campo si está vacío
            if (document.getElementById('patronBusqueda').value === '') {
                document.getElementById('patronBusqueda').focus();
            } else {
                procesarBusqueda();
            }
        }
    });
    
    document.getElementById('patronBusqueda').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            procesarBusqueda();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger button and menu elements
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    
    // Add click event listener to the hamburger button
    hamburger.addEventListener("click", function() {
        // Toggle the showMenu class on the menu element
        menu.classList.toggle("showMenu");
        
        // Toggle aria-expanded attribute for accessibility
        const isExpanded = menu.classList.contains("showMenu");
        hamburger.setAttribute("aria-expanded", isExpanded);
    });
    
    // Close the menu when a menu item is clicked
    const menuItems = document.querySelectorAll(".menuItem");
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener("click", function() {
            menu.classList.remove("showMenu");
            hamburger.setAttribute("aria-expanded", false);
        });
    });
    
    // Close the menu when clicking outside of it
    document.addEventListener("click", function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickInsideHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideMenu && !isClickInsideHamburger && menu.classList.contains("showMenu")) {
            menu.classList.remove("showMenu");
            hamburger.setAttribute("aria-expanded", false);
        }
    });
});
