let password = document.getElementById("password");

const qrlogin = () => {
  loginForm.style.display = "none";
  qrcode.style.display = "block";
};

const createqr = () => {
  link = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=google.com`;
};

const displayForm = () => {
  loginForm.style.display = "block";
  qrcode.style.display = "none";
};
