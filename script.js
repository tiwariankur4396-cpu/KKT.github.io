// USERS
const users = [
  { name: "ankur71", roll: "064" }
];

// FILE MAP (RELATIVE PATHS ONLY)
const files = {
  screenshot: "files/screenshot3.png",
  photo: "files/photo.jpg",
  notes: "files/notes.pdf"
};

// LOGIN
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

// SEARCH (OPEN ON SAME PAGE)
function search() {
  const key = document.getElementById("searchBox").value.trim().toLowerCase();
  const result = document.getElementById("result");
  result.innerHTML = "";

  if (!files[key]) {
    result.innerHTML = "<p style='color:red'>File not found</p>";
    return;
  }

  const path = files[key];
  const ext = path.split(".").pop().toLowerCase();

  if (ext === "pdf") {
    result.innerHTML = <iframe src="${path}"></iframe>;
  } else {
    result.innerHTML = <img src="${path}" alt="file">;
  }
}
