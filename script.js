"use strict";

// Only these users can enter
const authorizedUsers = [
    { name: "ankur71", roll: "064" },
      { name: "vibhas29", roll: "047" }
];

// FIXED: Exact names from your MyWebsite folder
const fileDatabase = {
    "screenshot": "Screenshot3.png", 
    "photo": "photo.png",
    "notes": "Communication skills.pdf"
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
        
        // Check if the file is a PDF
        if (fileName.toLowerCase().endsWith('.pdf')) {
            const iframe = document.createElement("iframe");
            iframe.src = fileName;
            iframe.style.width = "100%";
            iframe.style.height = "500px"; // Give the PDF enough height to be readable
            iframe.style.border = "none";
            result.appendChild(iframe);
            
            // Add a backup download link for mobile users
            const link = document.createElement("a");
            link.href = fileName;
            link.target = "_blank";
            link.innerText = "Click here to open PDF in new tab";
            link.style.display = "block";
            link.style.marginTop = "10px";
            result.appendChild(link);
        } else {
            // It's an image (png, jpg, etc.)
            const img = document.createElement("img");
            img.src = fileName;
            img.style.width = "100%";
            result.appendChild(img);
        }
    } else {
        result.textContent = "Not Available";
    }
}








