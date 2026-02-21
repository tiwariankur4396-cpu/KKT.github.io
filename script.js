// -------- USERS --------
const users = [
  { name: "ankur71", roll: "064" }
];

// -------- FILE MAP (RELATIVE TO index.html) --------
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

// -------- OPEN FILE (BULLETPROOF) --------
function search() {
  const key = document.getElementById("searchBox").value.trim().toLowerCase();

  if (!files[key]) {
    alert("File not found in code");
    return;
  }

  // 🔒 ABSOLUTELY CORRECT URL RESOLUTION
  const fileURL = new URL(files[key], document.baseURI).href;

  window.open(fileURL, "_blank");
}
