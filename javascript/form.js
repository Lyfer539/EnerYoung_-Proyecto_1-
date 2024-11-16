const addForm = document.getElementById("registerform"); 
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
const submitButton = document.getElementById("enviar");
const cancelButton = document.getElementById("cancelar");
const continueButton = document.getElementById("continuar");
const formContainer = document.getElementsByClassName("form-container")[0];
const emailContainer = document.getElementById("form-groupEmail");
const subsCheckbox = document.getElementById("subs");

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

subsCheckbox.addEventListener("change", () => {
    if (subsCheckbox.checked) {
        emailContainer.querySelector("input").setAttribute("required", "required");
        showElement(emailContainer);
    } else {
        emailContainer.querySelector("input").removeAttribute("required");
        hideElement(emailContainer);
    }
});

addForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    hideElement(errorMessage);
    hideElement(successMessage);

    if (subsCheckbox.checked && !emailContainer.querySelector("input").checkValidity()) {
        showMessage(errorMessage, "Por favor, proporciona un correo electrónico para suscribirte.");
        return;
    }

    if (!addForm.checkValidity()) {
        submitEvent.stopPropagation();
        addForm.classList.add("was-validate");
        showMessage(errorMessage, "Por favor, completa todos los campos obligatorios correctamente.");
        return;
    }

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    showMessage(successMessage, "Envío completado exitosamente!");
    showButton(continueButton);
    hideElement(cancelButton);
    hideElement(submitButton);

    addForm.reset();
    addForm.classList.remove("was-validate"); 
});