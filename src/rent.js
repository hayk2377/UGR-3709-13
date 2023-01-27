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
  var today = new Date().toISOString().slice(0, 10);
  console.log(today);
  startDate.setAttribute("min", today);
  endDate.setAttribute("min", today);
} catch (err) {
  console.log(err);
}
