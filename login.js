//input allows only numeric script
function numeric(event) {
  var n = String.fromCharCode(event.which);
  if (!/[0-9]/.test(n)) {
    event.preventDefault();
  }
}
window.onload = function () {
  document.getElementById("cra").style.display = "none";
  document.getElementById("rep").style.display = "none";
};
function cna() {
  document.getElementById("log").style.display = "none";
  document.getElementById("cra").style.display = "block";
  document.getElementById("rep").style.display = "none";
}
function ahaa() {
  document.getElementById("log").style.display = "block";
  document.getElementById("cra").style.display = "none";
}
function fp() {
  document.getElementById("rep").style.display = "block";
  document.getElementById("log").style.display = "none";
}
function btl() {
  document.getElementById("rep").style.display = "none";
  document.getElementById("log").style.display = "block";
}
function login() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user === "test" && pass === "12345") {
    window.location.replace("index.html");
  } else {
    alert("Enter Valid Username And Password");
  }
}
function cl() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
function sinup() {
  alert("Account Registered successfully");
  document.getElementById("log").style.display = "block";
}
function res() {
  alert("Password rest successfully");
  document.getElementById("log").style.display = "block";
}
var a = document.getElementById("log");
a.addEventListener("click", cv1);
a.addEventListener("click", cv2);
function cv1() {
  var c = document.getElementById("username").value;
  if (c == "") {
    document.getElementById("cv").innerHTML = "Enter Valid username";
    document.getElementById("cv").style.color = "red";
  } else {
    document.getElementById("cv").style.display = "none";
  }
}
function cv2() {
  var d = document.getElementById("password").value;
  if (d == "") {
    document.getElementById("bv").innerHTML = "Enter Valid password";
    document.getElementById("bv").style.color = "red";
  } else {
    document.getElementById("bv").style.display = "none";
  }
}
