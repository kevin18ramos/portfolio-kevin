document.addEventListener("DOMContentLoaded", function () {
    const labContent = {
        lab1: {
            title: "Lab 1 - LinuxVM & VirtualBox",
            description: `
                Setup and configured a Linux VM using VirtualBox.<br><br>
                <img src="images/lab1.png" alt="Lab 1 Image" style="max-width:100%;">
            `
        },
        lab2: {
            title: "Lab 2 - User Group Management & Permissions",
            description: `
                Managed users, groups, and file permissions in Linux.<br><br>
                <img src="images/lab2.png" alt="Lab 2 Image" style="max-width:100%;">
            `
        },
        "lab2.2": {
            title: "Lab 2.2 - User Group Management & Modifying File Permissions",
            description: `
                Modified file permissions and group ownership.<br><br>
                <img src="images/lab2_2.png" alt="Lab 2.2 Image" style="max-width:100%;">
            `
        },
        lab3: {
            title: "Lab 3 - File Management & Essential Tools",
            description: `
                Used Linux file management commands and tools.<br><br>
                <img src="images/lab3.png" alt="Lab 3 Image" style="max-width:100%;">
            `
        },
        lab4: {
            title: "Lab 4 - RHEL Grep | Piping",
            description: `
                Practiced grep and piping commands in RHEL.<br><br>
                <img src="images/lab4.png" alt="Lab 4 Image" style="max-width:100%;">
            `
        },
        "lab4.2": {
            title: "Lab 4.2 - RHEL Advanced - Grep | Piping",
            description: `
                Advanced usage of grep and piping techniques.<br><br>
                <img src="images/lab4_2.png" alt="Lab 4.2 Image" style="max-width:100%;">
            `
        },
        lab5: {
            title: "Lab 5 - MAN & NGINX",
            description: `
                Worked with manual pages and NGINX basics.<br><br>
                <img src="images/lab5.png" alt="Lab 5 Image" style="max-width:100%;">
            `
        },
        lab6: {
            title: "Lab 6 - RHEL Apache & Networking",
            description: `
                Configured Apache server and networking basics.<br><br>
                <img src="images/lab6.png" alt="Lab 6 Image" style="max-width:100%;">
            `
        },
        lab7: {
            title: "Lab 7 - Cron & rSyslog",
            description: `
                Scheduled jobs with cron and configured rsyslog.<br><br>
                <img src="images/lab7.png" alt="Lab 7 Image" style="max-width:100%;">
            `
        },
        lab8: {
            title: "Lab 8 - Apache & Monitoring",
            description: `
                Monitored Apache services and system performance.<br><br>
                <img src="images/lab8.png" alt="Lab 8 Image" style="max-width:100%;">
            `
        },
        lab9: {
            title: "Lab 9 - SMTP + Postfix",
            description: `
                Configured SMTP services using Postfix.<br><br>
                <img src="images/lab9.png" alt="Lab 9 Image" style="max-width:100%;">
            `
        }
    };

    const buttons = document.querySelectorAll(".lab-btn");
    const labTitle = document.getElementById("lab-title");
    const labDescription = document.getElementById("lab-description");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedLab = this.dataset.lab;

            labTitle.textContent = labContent[selectedLab].title;
            labDescription.innerHTML = labContent[selectedLab].description;

            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});