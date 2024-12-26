document.addEventListener("DOMContentLoaded", function () {
    // Select all nav items and content sections
    const navItems = document.querySelectorAll(".nav-item");
    const contentSections = document.querySelectorAll(".content-section");

    // Loop through content sections to check if they have content
    contentSections.forEach((section) => {
        if (section.innerHTML.trim() === "") {
            // If section is empty, hide corresponding nav item
            const navItem = document.querySelector(`.nav-item[data-target="${section.id}"]`);
            if (navItem) {
                navItem.classList.add("hidden");
            }
        } else {
            // If not empty, show the first non-empty section
            section.classList.add("active");
        }
    });

    // Add event listeners for nav items
    navItems.forEach((item) => {
        item.addEventListener("click", function (event) {
            event.preventDefault();

            // Get target section
            const target = item.getAttribute("data-target");
            const targetSection = document.getElementById(target);

            // Hide all sections and remove active class
            contentSections.forEach((section) => section.classList.remove("active"));

            // Show the target section
            if (targetSection) {
                targetSection.classList.add("active");
            }
        });
    });
});
