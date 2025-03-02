// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener('DOMContentLoaded', () => {
    //Usamos [] para hacer una lista o Array - Aquí se almacenarán los nombres.
        let nombresAmigos = [];
    
        // Función para agregar un amigo
        function agregarAmigo() {
            const input = document.getElementById('amigo');
            const nombre = input.value.trim();
    
            // Validar que el campo no esté vacío
            if (nombre === "") {
                alert("Por favor, inserte un nombre.");
                return;
            }
    
            // Verificar si el nombre ya está en la lista
            if (nombresAmigos.includes(nombre)) {
                alert("Ese nombre ya ha sido agregado.");
                input.value = "";
                return;
            }
    
            // Agregar el nombre al array
            //Con .push agregamos un amigo en la parte final del Array.
            nombresAmigos.push(nombre);
    
            // Limpiar el campo de entrada
            input.value = "";
    
            // Actualizar la lista en el HTML
            mostrarListaAmigos();
        }
    
        // Función para mostrar los amigos en la lista
        function mostrarListaAmigos() {
            const lista = document.getElementById('listaAmigos');
            lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    
            nombresAmigos.forEach((amigo) => {
                const li = document.createElement("li");
                li.textContent = amigo;
                lista.appendChild(li);
            });
    }
    
        // Función para sortear un amigo aleatorio
        function sortearAmigo() {
            const resultado = document.getElementById('resultado');
    
            if (nombresAmigos.length === 0) {
                alert("No hay amigos en la lista para sortear.");
                return;
            }
    
            // Generar índice aleatorio
            const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
            const amigoSorteado = nombresAmigos[indiceAleatorio];
    
            // Mostrar resultado
            resultado.innerHTML = `<li><strong>${amigoSorteado}</strong> ha sido seleccionado como el amigo secreto 🎉</li>`;
        }
    
        // Asignar funciones a los botones
        document.querySelector(".button-add").addEventListener("click", agregarAmigo);
        document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
    });
    
    //Pero con .unshift, lo agregamos al inicio.