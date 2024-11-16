document.addEventListener("DOMContentLoaded", function () {
    const numHijosInput = document.getElementById("num-hijos");
    const fieldsContainer = document.getElementById("fields-container");

    numHijosInput.addEventListener("input", function () {
        const numHijos = parseInt(numHijosInput.value) || 0;

        // Limpia el contenedor
        fieldsContainer.innerHTML = "";

        // Genera los campos dinámicos
        for (let i = 1; i <= numHijos; i++) {
            const fieldGroup = document.createElement("div");
            fieldGroup.classList.add("mb-3");

            fieldGroup.innerHTML = `
                <label class="form-label">Nombre del hijo ${i}</label>
                <input 
                    type="text" 
                    class="form-control mb-2" 
                    placeholder="Nombre del hijo ${i}" />

                <label class="form-label">Edad del hijo ${i}</label>
                <input 
                    type="number" 
                    class="form-control" 
                    placeholder="Edad del hijo ${i}" />
            `;

            fieldsContainer.appendChild(fieldGroup);
        }
    });
});