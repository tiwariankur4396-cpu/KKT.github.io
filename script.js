"use strict";

/* ===== LOGIN DATA ===== */
const users = [
  { name: "ankur71", roll: "064" }
];

/* ===== FILE MAP ===== */
const files = {
  screenshot: "files/screenshot3.png",
  photo: "files/photo.jpg",
  notes: "files/notes.pdf"
};

/* ===== LOGIN ===== */
function login() {
  const name = document.getElementById("name").value.trim().toLowerCase();
  const roll = document.getElementById("roll").value.trim();
  const msg = document.getElementById("msg");

  const valid = users.find(
    u => u.name === name && u.roll === roll
  );

  if (!valid) {
    msg.textContent = "Invalid login";
    return;
  }

  msg.textContent = "";
  document.getElementById("login").style.display = "none";
  document.getElementById("searchSection").style.display = "block";
}

/* ===== SEARCH & DISPLAY (SAME PAGE) ===== */
function search() {
  const key = document.getElementById("searchBox").value.trim().toLowerCase();
  const output = document.getElementById("result");

  output.innerHTML = "";

  if (!files[key]) {
    output.textContent = "File not found";
    return;
  }

  const path = files[key];
  const ext = path.split(".").pop().toLowerCase();

  if (ext === "pdf") {
    const obj = document.createElement("object");
    obj.data = path;
    obj.type = "application/pdf";
    obj.style.width = "100%";
    obj.style.height = "500px";
    output.appendChild(obj);
  } else {
    const img = document.createElement("img");
    img.src = path;
    img.style.width = "100%";
    output.appendChild(img);
  }
}
