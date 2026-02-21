// USERS (lowercase only)
// ================= USERS =================
const users = [
  { name: "ankur71", roll: "064" }
];

// ================= BASE PATH (AUTO-DETECTED) =================
const BASE_PATH = (() => {
  const { origin, pathname } = window.location;
  // remove filename (index.html) if present
  const base = pathname.endsWith("/")
    ? pathname
    : pathname.substring(0, pathname.lastIndexOf("/") + 1);
  return origin + base;
})();

// ================= FILE MAP =================
const files = {
  screenshot: "files/screenshot3.png",
  photo: "files/photo.jpg",
  notes: "files/notes.pdf"
};

// ================= LOGIN =================
function login() {
  const name = document.getElementById("name").value.trim().toLowerCase();
  const roll = document.getElementById("roll").value.trim();
  const msg = document.getElementById("msg");

  const user = users.find(u => u.name === name && u.roll === roll);

  if (!user) {
    msg.textContent = "Invalid login";
    return;
  }

  msg.textContent = "";
  document.getElementById("login").style.display = "none";
  document.getElementById("searchSection").style.display = "block";
}

// ================= SEARCH =================
function search() {
  const key = document.getElementById("searchBox").value.trim().toLowerCase();
  const result = document.getElementById("result");
  result.innerHTML = "";

  if (!files[key]) {
    result.innerHTML = "<p style='color:red'>File not found</p>";
    return;
  }

  const fullPath = BASE_PATH + files[key];
  const ext = fullPath.split(".").pop().toLowerCase();

  if (ext === "pdf") {
    result.innerHTML = `
      <iframe src="${fullPath}" width="100%" height="500"></iframe>
    `;
  } else {
    result.innerHTML = `
      <img src="${fullPath}" style="width:100%;height:auto;" alt="file">
    `;
  }
}
