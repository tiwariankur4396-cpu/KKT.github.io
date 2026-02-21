// REGISTERED USERS
const users = [
  { name: "ANKUR71", roll: "064" },
  { name: "VIBHASH29", roll: "047" }
];

// REGISTERED FILES (ALL KEYS LOWERCASE)
const files = {
  notes: "/files/notes.pdf",
  screenshot: "/files/Screenshot3.png",
  screenshot3: "/files/Screenshot3.png",
  photo: "/files/photo.png"
};

// LOGIN FUNCTION
function login() {
  const name = document.getElementById("name").value.toLowerCase().trim();
  const roll = document.getElementById("roll").value.trim();
  const msg = document.getElementById("msg");

  if (!name || !roll) {
    msg.innerText = "Fill all fields";
    return;
  }

  const ok = users.find(u => u.name === name && u.roll === roll);

  if (ok) {
    document.getElementById("login").style.display = "none";
    document.getElementById("search").style.display = "block";
    msg.innerText = "";
  } else {
    msg.innerText = "Contact the developer";
  }
}

// SEARCH FUNCTION
function search() {
  const result = document.getElementById("result");

  // HARD-CODED IMAGE (NO VARIABLES, NO CONDITIONS)
  result.innerHTML = `
    <h3>Image test</h3>
    <img 
      src="/files/Screenshot3.png" 
      style="max-width:100%; border:3px solid red;"
      onerror="this.outerHTML='<p style=color:red>IMAGE FAILED TO LOAD</p>'"
    >
  `;
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


