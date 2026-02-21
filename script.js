// ================= USERS =================
const users = [
  {
    name: "ankur71", // ALWAYS lowercase
    roll: "064"
  }
];

// ================= FILE MAP =================
// RULES:
// - filenames MUST be lowercase
// - extensions must match exactly
// - use ./files/ always

const files = {
  screenshot: "./files/screenshot3.png",
  photo: "./files/photo.jpg",
  image: "./files/image.png",
  notes: "./files/notes.pdf"
};

// ================= LOGIN =================
function login() {
  const nameInput = document.getElementById("name").value.trim();
  const rollInput = document.getElementById("roll").value.trim();
  const msg = document.getElementById("msg");

  const name = nameInput.toLowerCase(); // normalize input

  const validUser = users.find(
    u => u.name === name && u.roll === rollInput
  );

  if (!validUser) {
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

  const path = files[key];
  const ext = path.split(".").pop();

  if (ext === "pdf") {
    result.innerHTML = `
      <iframe src="${path}" width="100%" height="500"></iframe>
    `;
  } else {
    result.innerHTML = `
      <img src="${path}" alt="file" style="max-width:100%;height:auto;">
    `;
  }
}
