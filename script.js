const users = [
  { name: "ankur71", roll: "064" }
];

// Only RELATIVE paths — no slashes, no repo names
const files = {
  screenshot: "files/screenshot3.png",
  photo: "files/photo.jpg",
  notes: "files/notes.pdf"
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

  // Let the browser resolve the path correctly
  window.location.href = files[key];
}
