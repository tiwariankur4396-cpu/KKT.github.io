// USERS
const users = [
  { name: "ankur71", roll: "064" },
  { name: "vibhas29", roll: "047" }
];

// FILE REGISTRY (RELATIVE PATHS)
const files = {
  screenshot: "./files/Screenshot3.png",
  screenshot3: "./files/Screenshot3.png",
  photo: "./files/photo.jpg",
  image: "./files/image.png",
  notes: "./files/notes.pdf"
};

// LOGIN
function login() {
  const name = document.getElementById("name").value.toLowerCase().trim();
  const roll = document.getElementById("roll").value.trim();
  const msg = document.getElementById("msg");

  const user = users.find(u => u.name === name && u.roll === roll);

  if (!user) {
    msg.innerText = "Invalid login";
    return;
  }

  document.getElementById("login").style.display = "none";
  document.getElementById("searchSection").style.display = "block";
}

// SEARCH
function search() {
  const key = document.getElementById("searchBox").value.toLowerCase().trim();
  const result = document.getElementById("result");
  result.innerHTML = "";

  if (!files[key]) {
    result.innerHTML = "<p style='color:red'>File not found</p>";
    return;
  }

  const filePath = files[key];
  const ext = filePath.split(".").pop().toLowerCase();

  if (ext === "pdf") {
    result.innerHTML = `<iframe src="${filePath}"></iframe>`;
  } else if (["png", "jpg", "jpeg"].includes(ext)) {
    result.innerHTML = `<img src="${filePath}">`;
  } else {
    result.innerHTML = "<p style='color:red'>Unsupported file type</p>";
  }
}




