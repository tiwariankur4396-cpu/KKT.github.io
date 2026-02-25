"use strict";

const authorizedUsers = [
    { name: "ankur71", roll: "064" },
    { name: "vibhas29", roll: "047" },
    { name: "parth99", roll: "007" },
    { name: "iram66", roll: "090" }
];

const fileDatabase = {
    "screenshot": "Screenshot3.png",
    "photo": "photo.png",
    "cpexp3": "cpexp3.pdf",
    "cpexp4": "cpexp4.pdf",
    "notes": "Communication skills.pdf"
};

function login() {
    const nameInput = document.getElementById("name").value.trim().toLowerCase();
    const rollInput = document.getElementById("roll").value.trim();
    const msg = document.getElementById("msg");

    const user = authorizedUsers.find(u => u.name === nameInput && u.roll === rollInput);

    if (user) {
        document.getElementById("login").style.display = "none";
        document.getElementById("searchSection").style.display = "block";
    } else {
        msg.textContent = "Contact the developer";
    }
}

function search() {
    const key = document.getElementById("searchBox").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if (key === "") return;

    if (fileDatabase[key]) {
        const fileName = fileDatabase[key];

        if (fileName.toLowerCase().endsWith(".pdf")) {
            // Display as a clickable PDF link
            const link = document.createElement("a");
            link.href = fileName;
            link.textContent = "📄 Open PDF: " + key.toUpperCase();
            link.target = "_blank";
            link.style.display = "block";
            link.style.padding = "10px";
            link.style.background = "#eef";
            link.style.borderRadius = "5px";
            resultDiv.appendChild(link);
        } else {
            // Display as an Image
            const img = document.createElement("img");
            img.src = fileName;
            img.style.width = "100%";
            img.style.borderRadius = "8px";
            resultDiv.appendChild(img);
        }
    } else {
        resultDiv.style.color = "#888";
        resultDiv.textContent = "No matching file found...";
    }
}
