const phone = () => {
  var button = document.getElementById("purchase");
  let phoneNumber = button.value;
  if (button.textContent != phoneNumber) {
    button.textContent = phoneNumber;
  } else {
    button.textContent = "purchase";
  }
};
