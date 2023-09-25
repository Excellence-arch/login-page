password = document.getElementById("password");
const toggleVisibility = () => {
  if (password.type == "password") {
    password.type = "text";
    image.src = "./assets/view.png";
    image.alt = "hide";
  } else {
    password.type = "password";
    image.src = "./assets/hide.png";
    image.alt = "view";
  }
};

const signin = () => {
  signIn.style.color = "#ff6a00";
  // signIn.style.borderBottom = "1px solid #ff6a00";
  join.style.color = "black";
  // join.style.borderBottom = "1px solid black";
  loginForm.style.display = "block";
  registerForm.style.display = "none";
};

const register = () => {
  signIn.style.color = "black";
  join.style.color = "#ff6a00";
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  qrcode.style.display = "none";
};

const qrlogin = () => {
  signIn.style.color = "black";
  loginForm.style.display = "none";
  qrcode.style.display = "block";
  signIn.style.color = "#ff6a00";
  // qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=google.com`;
};

const createqr = () => {
  link = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=google.com`;
};

const displayForm = () => {
  signIn.style.color = "#ff6a00";
  join.style.color = "black";
  loginForm.style.display = "block";
  registerForm.style.display = "none";
  qrcode.style.display = "none";
};
