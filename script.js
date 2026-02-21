"use strict";

/* ===== USER DATA ===== */
const users = [
    { name: "ankur71", roll: "064" }
];

/* ===== FILE PATHS ===== */
// FIXED: Removed "KKT.github.io/" from paths. 
// These must be relative to your index.html.
const files = {
    screenshot: "files/screenshot3.png",
    photo: "files/photo.jpg",
    notes: "files/notes.pdf"
};

/* ===== LOGIN FUNCTION ===== */
function login() {
    const name = document.getElementById("name").value.trim().toLowerCase();
    const roll = document.getElementById("roll").value.trim();
    const msg = document.getElementById("msg");

    const valid = users.find(u => u.name === name && u.roll === roll);

    if (!valid) {
        msg.textContent = "Invalid login";
        return;
    }

    msg.textContent = "";
    document.getElementById("login").style.display = "none";
    document.getElementById("searchSection").style.display = "block";
}

/* ===== SEARCH & DISPLAY ===== */
function search() {
    // FIXED: Added 'key' definition. Your original code was missing this line!
    const key = document.getElementById("searchBox").value.trim().toLowerCase();
    const result = document.getElementById("result");

    result.innerHTML = ""; // Clear previous results

    if (!files[key]) {
        result.textContent = "File not found";
        return;
    }

    const path = files[key];
    const ext = path.split(".").pop().toLowerCase();

    if (ext === "pdf") {
        const obj = document.createElement("object");
        obj.data = path;
        obj.type = "application/pdf";
        obj.style.width = "100%";
        obj.style.height = "500px";
        result.appendChild(obj);
    } else {
        const img = document.createElement("img");
        img.src = path;
        img.style.width = "100%";
        // Add an alert if the image fails to load to help you debug
        img.onerror = function() {
            result.textContent = "Error: Image file not found in 'files' folder.";
        };
        result.appendChild(img);
    }
}
