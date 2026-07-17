const validPin = 1234;

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("btn click");
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText,
    );
    if (bank === "Select bank") {
      alert("please select bank");
      return;
    }

    if (accountNumber.length !== 13) {
      alert("Please provide a valid account number");
      return;
    }
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount to add");
      return;
    }
    if (pin !== validPin) {
      alert("Please Provide valid pin");
      return;
    }
    const totalNewAvaiableBalance = availableBalance + amount;
    document.getElementById("available-balance").innerText =
      totalNewAvaiableBalance;
  });
