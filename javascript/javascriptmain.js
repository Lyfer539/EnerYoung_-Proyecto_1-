// Dinamic tytle

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

// Hide/Show Section navigation

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

// Show/Hide Tooltips

document.addEventListener("DOMContentLoaded", function() {
    const tooltipTriggerCfos = document.getElementById("tooltipTriggerCfos");
    const asideCfos = document.getElementById("asideCfos");

    asideCfos.style.display = "none";

    tooltipTriggerCfos.addEventListener("mouseenter", function() {
        asideCfos.style.display = "block";
    });

    tooltipTriggerCfos.addEventListener("mouseleave", function() {
        asideCfos.style.display = "none";
    });

    const tooltipTriggerACR = document.getElementById("tooltipTriggerACR");
    const asideACR = document.getElementById("asideACR");

    asideACR.style.display = "none";

    tooltipTriggerACR.addEventListener("mouseenter", function() {
        asideACR.style.display = "block";
    });

    tooltipTriggerACR.addEventListener("mouseleave", function() {
        asideACR.style.display = "none";
    });

    const tooltipTriggerGW = document.getElementById("tooltipTriggerGW");
    const asideGW = document.getElementById("asideGW");

    asideGW.style.display = "none";

    tooltipTriggerGW.addEventListener("mouseenter", function() {
        asideGW.style.display = "block";
    });

    tooltipTriggerGW.addEventListener("mouseleave", function() {
        asideGW.style.display = "none";
    });

    const tooltipTriggerG20 = document.getElementById("tooltipTriggerG20");
    const asideG20 = document.getElementById("asideG20");

    asideG20.style.display = "none";

    tooltipTriggerG20.addEventListener("mouseenter", function() {
        asideG20.style.display = "block";
    });

    tooltipTriggerG20.addEventListener("mouseleave", function() {
        asideG20.style.display = "none";
    });
});