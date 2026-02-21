// 1. DEVELOPER'S USER DATABASE
const authorizedUsers = [
    { name: "ankur71", roll: "064" },
    { name: "rahul", roll: "001" } // Add more users here
];

// 2. DEVELOPER'S FILE DATABASE
const fileDatabase = {
    "photo": "photo.png",
    "screenshot": "Screenshot3.png",
    "notes": "notes.pdf"
};

// LOGIN FUNCTION
function checkLogin() {
    const userIn = document.getElementById("username").value.trim();
    const rollIn = document.getElementById("rollno").value.trim();
    const errorMsg = document.getElementById("login-error");

    // Check if user exists in our authorized list
    const userFound = authorizedUsers.find(u => u.name === userIn && u.roll === rollIn);

    if (userFound) {
        document.getElementById("login-box").style.display = "none";
        document.getElementById("search-box").style.display = "block";
    } else {
        errorMsg.textContent = "Contact the developer";
    }
}

// SEARCH FUNCTION
function findFile() {
    const query = document.getElementById("search-input").value.toLowerCase().trim();
    const display = document.getElementById("display-area");
    display.innerHTML = ""; // Clear old results

    if (fileDatabase[query]) {
        const fileName = fileDatabase[query];
        const extension = fileName.split('.').pop().toLowerCase();

        if (extension === "pdf") {
            display.innerHTML = <embed src="${fileName}" type="application/pdf" width="100%" height="400px">;
        } else {
            display.innerHTML = <img src="${fileName}" alt="result">;
        }
    } else {
        display.innerHTML = <p class="error">Not Available</p>;
    }
}