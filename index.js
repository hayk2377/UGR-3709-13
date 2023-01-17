console.log("abebe");

var show = function () {
  showButton1.classList.add("transcript__button--hidden");
  hideButton1.classList.remove("transcript__button--hidden");
  transcript1.classList.remove("transcript__text--hidden");
};

var hide = function () {
  showButton1.classList.remove("transcript__button--hidden");
  hideButton1.classList.add("transcript__button--hidden");
  transcript1.classList.add("transcript__text--hidden");
};

try {
  showButton1.onclick = show;
  hideButton1.onclick = hide;
} catch (err) {
  console.log(err);
}

try {
  showButton2.onclick = show;
  hideButton2.onclick = hide;
} catch (err) {
  console.log(err);
}

var badFirstName = function (e) {
  if (e.target.value.split(" ").length > 1) {
    alert("FIRST NAME CAN NOT HAVE A SPACE");
    e.target.value = "";
  }
};
var badLastName = function (e) {
  if (e.target.value.split(" ").length > 1) {
    alert("LAST NAME CAN NOT HAVE A SPACE");
    e.target.value = "";
  }
};

try {
  firstName1.addEventListener("focusout", badFirstName);
  lastName1.addEventListener("focusout", badLastName);
} catch (err) {
  console.log(err);
}

try {
  firstName2.addEventListener("focusout", badFirstName);
  lastName2.addEventListener("focusout", badLastName);
} catch (err) {
  console.log(err);
}

try {
  var today = new Date().toISOString().slice(0, 10);
  console.log(today);
  startDate.setAttribute("min", today);
  endDate.setAttribute("min", today);
} catch (err) {
  console.log(err);
}
