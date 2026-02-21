const users = [
  { name: "ankur71", roll: "064" }
];

// ✅ PROJECT-REPO SAFE PATHS
const files = {
  screenshot: "/KKT.github.io/files/screenshot3.png",
  photo: "/KKT.github.io/files/photo.jpg",
  notes: "/KKT.github.io/files/notes.pdf"
};

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

function search() {
  const key = document.getElementById("searchBox").value.trim().toLowerCase();

  if (!files[key]) {
    alert("File not found");
    return;
  }

  // ✅ OPEN FILE DIRECTLY
  window.open(files[key], "_blank");
}
