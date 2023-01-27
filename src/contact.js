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
  firstName2.addEventListener("focusout", badFirstName);
  lastName2.addEventListener("focusout", badLastName);
} catch (err) {
  console.log(err);
}
