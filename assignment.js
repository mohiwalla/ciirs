i = 1;
delay = 2000;
interval = setInterval(auto, delay);
function next() {
  document.getElementById(`img${i}`).style.display = "none";
  if (i == 20) i = 0;
  document.getElementById(`img${i + 1}`).style.display = "block";
  i++;
  clearInterval(interval);
  interval = setInterval(auto, delay);
}

function auto() {
  document.getElementById(`img${i}`).style.display = "none";
  if (i == 20) i = 0;
  document.getElementById(`img${i + 1}`).style.display = "block";
  i++;
  delay = 2000;
}

function back() {
  document.getElementById(`img${i}`).style.display = "none";
  if (i == 1) {
    i = 20;
    document.getElementById(`img${i}`).style.display = "block";
  } else {
    document.getElementById(`img${i - 1}`).style.display = "block";
    i--;
  }
  clearInterval(interval);
  interval = setInterval(auto, delay);
}
check = true;
function login() {
  if (check == true) {
    check = false;
    document.getElementById("popup").style.display = "block";
  } else {
    check = true;
    document.getElementById("popup").style.display = "none";
  }
}

function validate() {
  firstname = document.getElementById("firstname").value;
  lastname = document.getElementById("lastname").value;
  Email = document.getElementById("Email").value;
  password = document.getElementById("password").value;
  confirmpass = document.getElementById("confirm").value;

  if (firstname == "") {
    window.alert("Please Eneter First-name.");
    return false;
  }
  if (firstname.length < 3) {
    window.alert("Please Eneter a valid First-name.");
    return false;
  }
  if (lastname == "") {
    window.alert("Please Eneter last-name.");
    return false;
  }
  if (lastname.length < 3) {
    window.alert("Please Eneter a valid last-name.");
    return false;
  }

  if (Email.length < 6 || Email.slice(-1) == ".") {
    window.alert("Please Eneter E-mail.");
    return false;
  }

  if (!Email.includes("@")) {
    window.alert("Please Eneter E-mail.");
    return false;
  }

  index = Email.indexOf("@");
  if (Email.includes("@", index + 1)) {
    window.alert("Please Enter a valid E-mail address");
    return false;
  }
  if (!Email.includes(".", index)) {
    window.alert("Please Enter a valid E-mail address");
    return false;
  }
  if (Email.substr(index + 1, 1) == "." || Email.substr(index - 1, 1) == ".") {
    window.alert("Please Enter a valid E-mail address");
    return false;
  }

  if (Email.substr(0, 1) == `"`) {
    if (Email.substr(index - 1, 1) == `"`);
    else if (Email.substr(0, 1) == "." || Email.includes("..")) {
      window.alert("Please Enter a valid E-mail address");
      return false;
    }
  }

  if (password == "") {
    window.alert("Please set a password.");
    return false;
  }
  if (password.length < 8) {
    window.alert("Password must have atleast 8 charactors.");
    return false;
  }
  if (!/[a-z]/g.test(password)) {
    window.alert(
      "Your Password must contain atleast one small-case charactor."
    );
    return false;
  }
  if (!/[A-Z]/g.test(password)) {
    window.alert(
      "Your Password must contain atleast one upper-case charactor."
    );
    return false;
  }
  if (!/[0-9]/g.test(password)) {
    window.alert("Your Password must contain atleast one numeric charactor.");
    return false;
  }
  if (!/[^A-z0-9]/g.test(password)) {
    window.alert("Your Password must contain atleast one special charactor.");
    return false;
  }

  if (confirmpass == "") {
    window.alert("Please confirm your password.");
    return false;
  }
  if (password != confirmpass) {
    window.alert("Passwords don't match.");
    return false;
  }
}

function test(arr, lenth, password) {
  for (t = 0; t < lenth; t++) {
    if (password.includes(arr[t])) return true;
    break;
  }
}
