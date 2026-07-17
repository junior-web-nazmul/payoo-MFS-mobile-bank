document.getElementById("btn-login").addEventListener("click", function (e) {
  // e = emate object
  e.preventDefault();
  const mobileNumber = 12345678910;
  const pinNumber = 1234;
  const mobileNumbervalue = document.getElementById("mobile-number").value;
  const mobileNumbervalueConverted = parseInt(mobileNumbervalue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueconverted = parseInt(pinNumberValue);

  if (
    mobileNumbervalueConverted === mobileNumber &&
    pinNumberValueconverted === pinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid Credentials");
  }
});
