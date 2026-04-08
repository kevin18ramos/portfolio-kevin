document.addEventListener("DOMContentLoaded", function () {
    const labContent = {
        lab1: {
            title: "Lab 1 - LinuxVM & VirtualBox",
            doc: "https://docs.google.com/document/d/1uRcX3NEQMPRCeFlIjkE5RQFi97i6v0k7uj0kzhobmdU/preview"
        },
        lab2: {
            title: "Lab 2 - User Group Management & Permissions",
            doc: "https://docs.google.com/document/d/YOUR_DOC_ID_2/preview"
        },
        "lab2.2": {
            title: "Lab 2.2 - User Group Management & Modifying File Permissions",
            doc: "https://docs.google.com/document/d/YOUR_DOC_ID_3/preview"
        },
        lab3: {
            title: "Lab 3 - File Management & Essential Tools",
            doc: "https://docs.google.com/document/d/YOUR_DOC_ID_4/preview"
        },
        lab4: {
            title: "Lab 4 - RHEL Grep | Piping",
            doc: "https://docs.google.com/document/d/YOUR_DOC_ID_5/preview"
        },
        "lab4.2": {
            title: "Lab 4.2 - RHEL Advanced - Grep | Piping",
            doc: "https://docs.google.com/document/d/YOUR_DOC_ID_6/preview"
        },
        lab5: {
            title: "Lab 5 - MAN & NGINX",
            doc: "https://docs.google.com/document/d/YOUR_DOC_ID_7/preview"
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