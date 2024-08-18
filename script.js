// Scroll to Features Section on Learn More Click
document.addEventListener("DOMContentLoaded", function() {
    const learnMoreButton = document.querySelector('a[href="#features"]');

    learnMoreButton.addEventListener("click", function(event) {
        event.preventDefault();
        const featuresSection = document.querySelector("#features");
        
        featuresSection.scrollIntoView({ behavior: "smooth" });
    });
});
