password = document.getElementById("password");
const toggleVisibility = () => {
  if (password.type == "password") {
    password.type = "text";
    image.src = "./assets/view.png"
    image.alt = "hide"
  } else {
    password.type = "password";
    image.src = "./assets/hide.png";
    image.alt = "view"
  }
};

const signin = () => {
  signIn.style.color = "#ff6a00";
  // signIn.style.borderBottom = "1px solid #ff6a00";
  join.style.color = "black";
  // join.style.borderBottom = "1px solid black";
  loginForm.style.display = "block";
  registerForm.style.display = "none";
}

const register = () => {
  signIn.style.color = "black";
  // signIn.style.borderBottom = "1px solid black";
  join.style.color = "#ff6a00";
  // join.style.borderBottom = "1px solid #ff6a00";
  loginForm.style.display = "none";
  registerForm.style.display = "block";
}