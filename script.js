// USERS
const users = [
  { name: "ankur", roll: "064" },
  { name: "vibhansh", roll: "047" }
];

// FILES (KEYS MUST BE LOWERCASE)
const files = {
  notes: "/files/notes.pdf",
  screenshot: "/files/Screenshot3.png",
  screenshot3: "/files/Screenshot3.png",
  photo: "/files/photo.png"
};

// LOGIN FUNCTION
function login() {
  const nameInput = document.getElementById("name");
  const rollInput = document.getElementById("roll");
  const msg = document.getElementById("msg");

  const name = nameInput.value.toLowerCase().trim();
  const roll = rollInput.value.trim();

  const user = users.find(
    u => u.name === name && u.roll === roll
  );

  if (!user) {
    msg.innerText = "Invalid login";
    return;
  }

  // SHOW / HIDE SECTIONS (SAFE WAY)
  const loginDiv = document.getElementById("login");
  const searchDiv = document.getElementById("searchSection");

  loginDiv.style.display = "none";
  searchDiv.style.display = "block";

  msg.innerText = "";
}
  // SUCCESS
  document.getElementById("login").style.display = "none";
  document.getElementById("searchSection").style.display = "block";
  msg.innerText = "";
}

// SEARCH FUNCTION
function search() {
  const key = document
    .getElementById("searchBox")
    .value
    .toLowerCase()
    .trim();

  const result = document.getElementById("result");
  result.innerHTML = "";

  if (!files[key]) {
    result.innerHTML = `<p style="color:red">File not found</p>`;
    return;
  }

  const filePath = files[key];

  if (filePath.endsWith(".pdf")) {
    result.innerHTML = `
      <iframe src="${filePath}" width="700" height="500"></iframe>
    `;
  } else {
    result.innerHTML = `
      <img src="${filePath}" style="max-width:100%; border:2px solid black;">
    `;
  }
}

