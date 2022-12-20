//input allows only numeric script
function numeric(event) {
  var n = String.fromCharCode(event.which);
  if (!/[0-9]/.test(n)) {
    event.preventDefault();
  }
}
//hide card11 and card12 script
window.onload = function () {
  document.getElementById("card11").style.display = "none";
  document.getElementById("card12").style.display = "none";
};
//show card11 script
function hi() {
  var z = document.getElementById("card11");
  if (z.style.display === "none") {
    z.style.display = "block";
  }
}
//show card12 script
function hii() {
  var z = document.getElementById("card12");
  if (z.style.display === "none") {
    z.style.display = "block";
  }
}
//hide card11 on click product card script
function hiii() {
  var z = document.getElementById("card11");
  if (z.style.display === "block") {
    z.style.display = "none";
  }
}
//hide card11 on click input box script
function hd() {
  var z = document.getElementById("card11");
  if (z.style.display === "block") {
    z.style.display = "none";
  }
}
//input value validation
function ck() {
  let viz = document.getElementById("amount").value;
  let viza = 189900;
  if (viz <= viza) {
    cal(), cal1(), cal2(), cal3(), cal4(), cal5(), hi();
  } else {
    alert("Kindly Enter The Correct Down Payment (Below than product value)");
  }
}

//EMI calculation chart script (3 months)
function cal() {
  let a = 189900;
  let b = document.getElementById("amount").value;
  let c = a - b;
  let d = 13;
  let e = d / 1200;
  let f = c * e;
  let g = 1 + e;
  let h = Math.pow(g, 3);
  let i = f * h;
  let j = h - 1;
  let k = i / j;
  let emi = Math.trunc(k);
  let mon = 3;
  let tot = emi * mon;

  document.getElementById("demo").innerHTML =
    "Your Loan Amount Is " + "&#8377; " + c + " /-";
  document.getElementById("demo1").innerHTML = "&#8377; " + emi;
  document.getElementById("demo2").innerHTML = "&#8377; " + tot;
  document.getElementById("demo3").innerHTML = mon + " Months";
  document.getElementById("demo4").innerHTML = d + " %";
  document.getElementById("dem").innerHTML =
    "Your Downpayment Is " + "&#8377; " + b + " /-";
}
//EMI calculation chart script (6 months)
function cal1() {
  let a = 189900;
  let b = document.getElementById("amount").value;
  let c = a - b;
  let d = 14;
  let e = d / 1200;
  let f = c * e;
  let g = 1 + e;
  let h = Math.pow(g, 6);
  let i = f * h;
  let j = h - 1;
  let k = i / j;
  let emi = Math.trunc(k);
  let mon = 6;
  let tot = emi * mon;

  //document.getElementById("demo").innerHTML = c;
  document.getElementById("demo5").innerHTML = "&#8377; " + emi;
  document.getElementById("demo6").innerHTML = "&#8377; " + tot;
  document.getElementById("demo7").innerHTML = mon + " Months";
  document.getElementById("demo8").innerHTML = d + " %";
}
//EMI calculation chart script (9 months)
function cal2() {
  let a = 189900;
  let b = document.getElementById("amount").value;
  let c = a - b;
  let d = 14;
  let e = d / 1200;
  let f = c * e;
  let g = 1 + e;
  let h = Math.pow(g, 9);
  let i = f * h;
  let j = h - 1;
  let k = i / j;
  let emi = Math.trunc(k);
  let mon = 9;
  let tot = emi * mon;

  //document.getElementById("demo").innerHTML = c;
  document.getElementById("demo9").innerHTML = "&#8377; " + emi;
  document.getElementById("demo10").innerHTML = "&#8377; " + tot;
  document.getElementById("demo11").innerHTML = mon + " Months";
  document.getElementById("demo12").innerHTML = d + " %";
}
//EMI calculation chart script (12 months)
function cal3() {
  let a = 189900;
  let b = document.getElementById("amount").value;
  let c = a - b;
  let d = 15;
  let e = d / 1200;
  let f = c * e;
  let g = 1 + e;
  let h = Math.pow(g, 12);
  let i = f * h;
  let j = h - 1;
  let k = i / j;
  let emi = Math.trunc(k);
  let mon = 12;
  let tot = emi * mon;

  //document.getElementById("demo").innerHTML = c;
  document.getElementById("demo13").innerHTML = "&#8377; " + emi;
  document.getElementById("demo14").innerHTML = "&#8377; " + tot;
  document.getElementById("demo15").innerHTML = mon + " Months";
  document.getElementById("demo16").innerHTML = d + " %";
}
//EMI calculation chart script (18 months)
function cal4() {
  let a = 189900;
  let b = document.getElementById("amount").value;
  let c = a - b;
  let d = 15;
  let e = d / 1200;
  let f = c * e;
  let g = 1 + e;
  let h = Math.pow(g, 18);
  let i = f * h;
  let j = h - 1;
  let k = i / j;
  let emi = Math.trunc(k);
  let mon = 18;
  let tot = emi * mon;

  //document.getElementById("demo").innerHTML = c;
  document.getElementById("demo17").innerHTML = "&#8377; " + emi;
  document.getElementById("demo18").innerHTML = "&#8377; " + tot;
  document.getElementById("demo19").innerHTML = mon + " Months";
  document.getElementById("demo20").innerHTML = d + " %";
}
//EMI calculation chart script (24 months)
function cal5() {
  let a = 189900;
  let b = document.getElementById("amount").value;
  let c = a - b;
  let d = 16;
  let e = d / 1200;
  let f = c * e;
  let g = 1 + e;
  let h = Math.pow(g, 24);
  let i = f * h;
  let j = h - 1;
  let k = i / j;
  let emi = Math.trunc(k);
  let mon = 24;
  let tot = emi * mon;

  //document.getElementById("demo").innerHTML = c;
  document.getElementById("demo21").innerHTML = "&#8377; " + emi;
  document.getElementById("demo22").innerHTML = "&#8377; " + tot;
  document.getElementById("demo23").innerHTML = mon + " Months";
  document.getElementById("demo24").innerHTML = d + " %";
}
//clear input field script
function cl() {
  document.getElementById("amount").value = "";
}
function logout() {
  window.location.replace("login.html");
}
