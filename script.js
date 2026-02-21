"use strict";

/* =========================
   USER LOGIN DATA
   ========================= */
const USERS = [
  {
    username: "ankur71",
    roll: "064"
  }
];

/* =========================
   FILE MAP
   (paths are RELATIVE)
   ========================= */
const FILES = {
  screenshot: "files/screenshot3.png",
  photo: "files/photo.jpg",
  notes: "files/notes.pdf"
};

/* =========================
   LOGIN FUNCTION
   ========================= */
function login() {
  const nameInput = document.getElementById("name");
  const rollInput = document.getElementById("roll");
  const msg = document.getElementById("msg");

  if (!nameInput || !rollInput || !msg) return;

  const name = nameInput.value.trim().toLowerCase();
  const roll = rollInput.value.trim();

  const validUser = USERS.find(
    u => u.username === name && u.roll === roll
  );

  if (!validUser) {
    msg.textContent = "Invalid login";
    return;
  }

  msg.textContent = "";
  document.getElementById("login").style.display = "none";
  document.getElementById("searchSection").style.display = "block";
}

/* =========================
   SHOW FILE (SAME PAGE ONLY)
   ========================= */
function showFile() {
  const input = document.getElementById("searchBox");
  const viewer = document.getElementById("viewer");

  if (!input || !viewer) return;

  const key = input.value.trim().toLowerCase();
  viewer.innerHTML = "";

  if (!FILES[key]) {
    viewer.textContent = "File not found";
    return;
  }

  const path = FILES[key];
  const extension = path.split(".").pop().toLowerCase();

  // IMAGE FILES
  if (extension === "png" || extension === "jpg" || extension === "jpeg") {
    const img = document.createElement("img");
    img.src = path;
    img.alt = "Loaded file";
    img.style.width = "100%";
    viewer.appendChild(img);
    return;
  }

  // PDF FILES
  if (extension === "pdf") {
    const obj = document.createElement("object");
    obj.data = path;
    obj.type = "application/pdf";
    obj.style.width = "100%";
    obj.style.height = "500px";
    viewer.appendChild(obj);
    return;
  }

  viewer.textContent = "Unsupported file type";
}


