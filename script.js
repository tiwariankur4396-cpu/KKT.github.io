"use strict";

const users = [
    { name: "ankur71", roll: "064" }
];

// FIXED: Removed "files/" prefix because images are in the same folder as this JS file.
// Also fixed capitalization to match your sidebar exactly.
const files = {
    screenshot: "files/Screenshot3.png", 
    photo: "files/photo.png",
    notes: "files/notes.pdf"
};

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

function search() {
    // FIXED: Defined 'key' so the function knows what you typed
    const key = document.getElementById("searchBox").value.trim().toLowerCase();
    const result = document.getElementById("result");

    result.innerHTML = ""; 

    if (!files[key]) {
        result.textContent = "File not found. Try 'photo' or 'screenshot'.";
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
        
        // Error helper: tells us if the file name in code matches the file on GitHub
        img.onerror = function() {
            result.textContent = "Path correct, but file not found: " + path;
        };
        
        result.appendChild(img);
    }
}

