const storedFormData = localStorage.getItem("formData");
const dynName = document.getElementById("dynTitle");

function showName(element, message) {
    element.textContent = message;
    element.style.display = "block";
}

if (storedFormData) {
    const formData = JSON.parse(storedFormData);
    showName(dynName, `Hola ${formData.name} ¡Bienvenido!`);
} else {
    showName(dynName, "Hola. !Bienvenido¡");
}

const upContainerHeight = upContainer.offsetHeight;
const sectionNavContainer = document.getElementById("sectionNavContainer");
let hideTimeout;

function hideSectionNavContainer() {
    hideTimeout = setTimeout(function () {
        sectionNavContainer.style.top = "-50px";
    }, 2000);
}

window.addEventListener("scroll", function () {
    clearTimeout(hideTimeout);

    if (window.scrollY > upContainerHeight) {
        sectionNavContainer.style.top = "0"; 
        hideSectionNavContainer();
    } else {
        sectionNavContainer.style.top = "-100px";
    }
});

sectionNavContainer.addEventListener("mouseenter", function () {
    clearTimeout(hideTimeout); 
    if (window.scrollY > upContainerHeight) {
        sectionNavContainer.style.top = "0";
    }
});

sectionNavContainer.addEventListener("mouseleave", hideSectionNavContainer);


document.addEventListener("DOMContentLoaded", function() {
    const tooltipTriggerCFos = document.getElementById("tooltipTriggerCFos");
    const asideCFos = document.getElementById("asideCFos");

    tooltipTriggerCFos.addEventListener("mouseenter", function() {
        asideCFos.style.display = "block";
    });

    tooltipTriggerCFos.addEventListener("mouseleave", function() {
        asideCFos.style.display = "none";
    });
});
