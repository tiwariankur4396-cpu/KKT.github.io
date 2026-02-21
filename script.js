// REGISTERED USERS (DEVELOPER ADDS)
const users = [
    { name: "ANKUR71", roll: "064" },
    { name: "VIBHAS29", roll: "047" }
];

// REGISTERED FILES
const files = {
    "notes": "files/notes.pdf",
    "Screenshot (3)": "files/Screenshot (3).png",
    "photo": "files/photo.png"
};

function login() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let msg = document.getElementById("msg");

    if (name === "" || roll === "") {
        msg.innerText = "Fill all fields";
        return;
    }

    let ok = users.find(u => u.name === name && u.roll === roll);

    if (ok) {
        document.getElementById("login").style.display = "none";
        document.getElementById("search").style.display = "block";
    } else {
        msg.innerText = "Contact the developer";
    }
}

function search() {
    let key = document.getElementById("searchBox").value
                .toLowerCase()
                .trim();

    let result = document.getElementById("result");

    if (files[key]) {
        let filePath = files[key];

        // SHOW INSIDE PAGE, NOT OPEN NEW PAGE
        if (filePath.endsWith(".pdf")) {
            result.innerHTML =
                `<iframe src="${filePath}" width="300" height="400"></iframe>`;
        } else {
            result.innerHTML =
                `<img src="${filePath}" width="700" height="500">`;
        }
    } else {
        result.innerText = "Not Available";
    }
}



