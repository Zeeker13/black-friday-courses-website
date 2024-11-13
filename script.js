document.addEventListener("DOMContentLoaded", function() {
    // Countdown Timer
    const countdownDate = new Date("December 1, 2024 00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
        }
    }

    setInterval(updateCountdown, 1000);

    // Copy Code Function
    function copyCode() {
        const codeText = document.getElementById("codeText").innerText;
        navigator.clipboard.writeText(codeText).then(() => {
            alert("Code copied to clipboard!");
        }).catch(err => {
            console.error("Could not copy text: ", err);
        });
    }

    // Category Button Logic
    const categoryButtons = document.querySelectorAll(".category-button");
    const cards = document.querySelectorAll(".card");
    const defaultCategory = "Accounting & Finance";

    function showCardsByCategory(category) {
        cards.forEach(card => {
            card.style.display = card.getAttribute("data-category") === category ? "block" : "none";
        });
    }

    categoryButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = button.getAttribute("data-category");
            showCardsByCategory(category);
        });
    });

    // Set default category on load
    showCardsByCategory(defaultCategory);

    // Smooth scroll to categories section when "Explore deals of the day" button is clicked
    const exploreButton = document.querySelector(".btn-danger");
    const categoriesSection = document.querySelector(".categories");

    if (exploreButton && categoriesSection) {
        exploreButton.addEventListener("click", function(e) {
            e.preventDefault();
            categoriesSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }
});
