let submitLoginValidate = () => {
  let elmUserNameLogin = document.getElementById("username__Login").value;
  let elmPasswordLogin = document.getElementById("password__Login").value;
  let elmAlertLoginUser = document.getElementById("alert__UserNull");
  let elmAlertLoginPassword = document.getElementById("alert__PasswordNull");
  let elmAlertLogin = document.getElementById("alert__Login");

  if (elmUserNameLogin === "") {
    elmAlertLoginUser.innerHTML = "";
    elmAlertLoginPassword.innerHTML = "";
    elmAlertLogin.innerHTML = "";
    elmAlertLoginUser.innerHTML = "<p>Username Can't Be Empty</p>";
    return;
  }
  if (elmPasswordLogin === "") {
    elmAlertLoginUser.innerHTML = "";
    elmAlertLoginPassword.innerHTML = "";
    elmAlertLogin.innerHTML = "";
    elmAlertLoginPassword.innerHTML = "<p>Password Can't Be Empty</p>";
    return;
  }
  if (elmUserNameLogin === "aptech" && elmPasswordLogin === "aptech") {
    window.location.href("../views/home.html");
  } else {
    elmAlertLoginUser.innerHTML = "";
    elmAlertLoginPassword.innerHTML = "";
    elmAlertLogin.innerHTML = "";
    elmAlertLogin.innerHTML = "<p>Your Account is not in my system</p>";
  }
};
