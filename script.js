"use strict";

// Only these users can enter
const authorizedUsers = [
    { name: "ankur71", roll: "064" },
      { name: "vibhas29", roll: "047" }
];

// FIXED: Exact names from your MyWebsite folder
const fileDatabase = {
    "screenshot": "Screenshot3.png", 
    "screenshot": "photo.png",
    "notes": "notes.pdf"
};

function login() {
    // We use lowercase to make login easier for the user
    const nameInput = document.getElementById("name").value.trim().toLowerCase();
    const rollInput = document.getElementById("roll").value.trim();
    const msg = document.getElementById("msg");

    const user = authorizedUsers.find(u => u.name === nameInput && u.roll === rollInput);

    if (user) {
        document.getElementById("login").style.display = "none";
        document.getElementById("searchSection").style.display = "block";
        msg.textContent = ""; 
    } else {
        // Requirement: Must say "Contact the developer"
        msg.textContent = "Contact the developer";
    }
}

function search() {
    const key = document.getElementById("searchBox").value.trim().toLowerCase();
    const result = document.getElementById("result");
    result.innerHTML = ""; 

    if (fileDatabase[key]) {
        const fileName = fileDatabase[key];
        const img = document.createElement("img");
        img.src = fileName; // No "files/" needed anymore!
        img.style.width = "100%";
        result.appendChild(img);
    } else {
        // Requirement: Say "Not Available"
        result.textContent = "Not Available";
    }
}





