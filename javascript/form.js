const addForm = document.getElementById("registerform"); 
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
const submitButton = document.getElementById("enviar");
const cancelButton = document.getElementById("cancelar");
const continueButton = document.getElementById("continuar");
const formContainer = document.getElementsByClassName("form-container")[0];
const emailContainer = document.getElementById("form-groupEmail");
const subsCheckbox = document.getElementById("subs");

// Funciones ocultar elementos

function showMessage(element, message) {
    element.textContent = message;
    element.style.display = "block";
}

function showElement(element) {
    element.style.display = "block";
}

function hideElement(element) {
    element.style.display = "none";
}

function showButton(element) {
    element.style.display = "inline-block";
}

// Funcion mostrar email + requerido

subsCheckbox.addEventListener("change", () => {
    if (subsCheckbox.checked) {
        emailContainer.querySelector("input").setAttribute("required", "required");
        showElement(emailContainer);
    } else {
        emailContainer.querySelector("input").removeAttribute("required");
        hideElement(emailContainer);
    }
});

// Validación formulario

addForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    hideElement(errorMessage);
    hideElement(successMessage);

    // Validación name

    const nameInput = document.getElementById("name");
    const nameValue = nameInput.value.trim();

    if (nameValue.length < 3 || nameValue.length > 25) {
        showMessage(errorMessage, "El nombre debe tener entre 3 y 25 caracteres.");
        return;
    }
    if (!/^[A-Za-z\s]+$/.test(nameValue)) {
        showMessage(errorMessage, "El nombre solo debe contener letras y espacios.");
        return;
    }

    // Validación correo

    if (subsCheckbox.checked && !emailContainer.querySelector("input").checkValidity()) {
        showMessage(errorMessage, "Por favor, proporciona un correo electrónico para suscribirte.");
        return;
    }

    // Validación final

    if (!addForm.checkValidity()) {
        submitEvent.stopPropagation();
        addForm.classList.add("was-validate");
        showMessage(errorMessage, "Por favor, completa todos los campos obligatorios correctamente.");
        return;
    }

    // Obtener email + name 

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    // Reset form

    showMessage(successMessage, "Envío completado exitosamente!");
    showButton(continueButton);
    hideElement(cancelButton);
    hideElement(submitButton);

    addForm.reset();
    addForm.classList.remove("was-validate"); 
});