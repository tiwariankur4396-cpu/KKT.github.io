"use strict";

// Only these users can enter
const authorizedUsers = [
    { name: "ankur71", roll: "064" },
      { name: "vibhas29", roll: "047" },
    { name: "parth99", roll: "007" },
    { name: "iram66", roll: "098" }
];

// FIXED: Exact names from your MyWebsite folder
const fileDatabase = {
    "screenshot": "Screenshot3.png", 
    "photo": "photo.png",
    "notes": "Communication skills.pdf",
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

    // Mapping keys to exact file names as they appear in your GitHub
    const fileDatabase = {
        "screenshot": "Screenshot3.png",
        "photo": "photo.png",
        "notes": "Communication skills.pdf" // MUST match GitHub exactly
    };

    if (fileDatabase[key]) {
        const fileName = fileDatabase[key];
        
        if (fileName.toLowerCase().endsWith('.pdf')) {
            // 1. Create a container for the PDF
            const pdfContainer = document.createElement("div");
            
            // 2. Add a direct "View/Download" button (Best for Android/Mobile)
            const downloadBtn = document.createElement("a");
            downloadBtn.href = fileName;
            downloadBtn.className = "download-btn"; // You can style this in CSS
            downloadBtn.innerText = "Click to View or Download PDF";
            downloadBtn.target = "_blank";
            downloadBtn.style.display = "block";
            downloadBtn.style.padding = "10px";
            downloadBtn.style.background = "#007bff";
            downloadBtn.style.color = "white";
            downloadBtn.style.textDecoration = "none";
            downloadBtn.style.borderRadius = "5px";
            downloadBtn.style.marginBottom = "10px";
            
            // 3. Create an embed for Laptop users
            const embed = document.createElement("embed");
            embed.src = fileName;
            embed.type = "application/pdf";
            embed.style.width = "100%";
            embed.style.height = "500px";
            
            pdfContainer.appendChild(downloadBtn);
            pdfContainer.appendChild(embed);
            result.appendChild(pdfContainer);
        } else {
            // Image handling remains the same
            const img = document.createElement("img");
            img.src = fileName;
            img.style.width = "100%";
            result.appendChild(img);
        }
    } else {
        result.textContent = "Not Available";
    }
}





