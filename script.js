// -------- USERS --------
const users = [
  { name: "ankur71", roll: "064" }
];

// -------- BASE PATH (AUTO, CORRECT) --------
const BASE_URL = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, "/");

// -------- FILE MAP (NO EXTENSION LIMIT) --------
const files = {
  screenshot: "files/screenshot3.png",
  photo: "files/photo.jpg",
  notes: "files/notes.pdf"
};

// -------- LOGIN --------
function login() {
  const name = document.getElementById("name").value.trim().toLowerCase();
  const roll = document.getElementById("roll").value.trim();
  const msg = document.getElementById("msg");

  const ok = users.find(u => u.name === name && u.roll === roll);
  if (!ok) {
    msg.textContent = "Invalid login";
    return;
  }

  msg.textContent = "";
  document.getElementById("login").style.display = "none";
  document.getElementById("searchSection").style.display = "block";
}

// -------- OPEN FILE --------
function search() {
  const key = document.getElementById("searchBox").value.trim().toLowerCase();

  if (!files[key]) {
    alert("File not found");
    return;
  }

  const fullPath = BASE_URL + files[key];
  window.open(fullPath, "_blank");
}
