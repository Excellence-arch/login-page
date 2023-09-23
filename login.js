password = document.getElementById("password");
const toggleVisibility = () => {
  password.type == "password" ? password.type = "text" : password.type = "password";
}