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
