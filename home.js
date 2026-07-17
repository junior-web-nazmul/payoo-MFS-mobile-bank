document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("btn click");
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = document.getElementById("add-pin").value;

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText,
    );
    const totalNewAvaiableBalance = availableBalance + amount;
    document.getElementById("available-balance").innerText =
      totalNewAvaiableBalance;
  });
