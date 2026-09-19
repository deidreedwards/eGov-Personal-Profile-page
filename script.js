document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".dp-project-toggle");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const project = button.closest(".dp-project");
            if (!project) return;

            const isOpen = project.classList.toggle("open");
            button.textContent = isOpen ? "Details −" : "Details +";
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
