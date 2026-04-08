document.addEventListener("DOMContentLoaded", function () {
    const labContent = {
        lab1: {
            title: "Lab 1 - LinuxVM & VirtualBox",
            doc: "https://docs.google.com/document/d/1uRcX3NEQMPRCeFlIjkE5RQFi97i6v0k7uj0kzhobmdU/preview"
        },
        lab2: {
            title: "Lab 2 - User Group Management & Permissions",
            doc: "https://docs.google.com/document/d/1n-GhJFDu9klGab3i26VeHkh7exHnXGk2EgoksgMPHaw/preview"
        },
        "lab2.2": {
            title: "Lab 2.2 - User Group Management & Modifying File Permissions",
            doc: "https://docs.google.com/document/d/1Q0tRulw3KsG-DDzUWuWvffkjy8SOAlsdes5_QYUknjU/preview"
        },
        lab3: {
            title: "Lab 3 - File Management & Essential Tools",
            doc: "https://docs.google.com/document/d/1BHiVW-hHgG9FrMY-rKAC5ibN4CeIJHQ13Ati5J7Ptyg/preview"
        },
        lab4: {
            title: "Lab 4 - RHEL Grep | Piping",
            doc: "https://docs.google.com/document/d/1aGW8Pg1qrENRcOFyeAIrcjySLlLvCOHqMX7CSbjtIB8/preview"
        },
        "lab4.2": {
            title: "Lab 4.2 - RHEL Advanced - Grep | Piping",
            doc: "https://docs.google.com/document/d/14VxwAXLFFDhrkbIzRiTkpMPM3ocHS-YK542cOn1v5Ho/preview"
        },
        lab5: {
            title: "Lab 5 - MAN & NGINX",
            doc: "https://docs.google.com/document/d/1kY2eOEK1pRBjYj41B2a4md6aFPRPaagmVmxzn83e3EQ/preview"
        },
        lab6: {
            title: "Lab 6 - RHEL Apache & Networking",
            doc: "https://docs.google.com/document/d/YOUR_DOC_ID_8/preview"
        },
        lab7: {
            title: "Lab 7 - Cron & rSyslog",
            doc: "https://docs.google.com/document/d/YOUR_DOC_ID_9/preview"
        },
        lab8: {
            title: "Lab 8 - Apache & Monitoring",
            doc: "https://docs.google.com/document/d/YOUR_DOC_ID_10/preview"
        },
        lab9: {
            title: "Lab 9 - SMTP + Postfix",
            doc: "https://docs.google.com/document/d/YOUR_DOC_ID_11/preview"
        }
    };

    const buttons = document.querySelectorAll(".lab-btn");
    const labTitle = document.getElementById("lab-title");
    const labDescription = document.getElementById("lab-description");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedLab = this.dataset.lab;

            labTitle.textContent = labContent[selectedLab].title;

            labDescription.innerHTML = `
                <iframe
                    src="${labContent[selectedLab].doc}"
                    width="100%"
                    height="700px"
                    style="border:none;">
                </iframe>
            `;

            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});