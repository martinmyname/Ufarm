const phone = () => {
  const button = document.getElementById("purchase");
  const phoneNumber = button.value;
  if (button.textContent != phoneNumber) {
    button.textContent = phoneNumber;
  } else {
    button.textContent = "purchase";
  }
};
