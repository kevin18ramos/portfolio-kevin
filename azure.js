document.addEventListener("DOMContentLoaded", function () {
    const labContent = {
        lab1: {
            title: "Lab 1",
            description: "This is the content for Lab 1. You can replace this text with whatever you want."
        },
        lab2: {
            title: "Lab 2",
            description: "This is the content for Lab 2. Add your own information here."
        },
        lab3: {
            title: "Lab 3",
            description: "This is the content for Lab 3. Display anything you want based on the clicked lab."
        },
        lab4: {
            title: "Lab 4",
            description: "This is the content for Lab 4. Keep adding more labs the same way."
        }
    };

    const buttons = document.querySelectorAll(".lab-btn");
    const labTitle = document.getElementById("lab-title");
    const labDescription = document.getElementById("lab-description");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedLab = this.dataset.lab;

            labTitle.textContent = labContent[selectedLab].title;
            labDescription.textContent = labContent[selectedLab].description;

            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});