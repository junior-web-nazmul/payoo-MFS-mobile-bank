const validPin = 1234;

//add money--------------

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

//--------------------------cash out--------------------------

document.getElementById("btn-withdraw").addEventListener("click", function (e) {
  e.preventDefault();
  const agentNumber = document.getElementById("agent-number").value;
  const withdrawAmount = parseInt(
    document.getElementById("withdraw-amount").value,
  );
  const withdrawPin = parseInt(document.getElementById("withdraw-pin").value);
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText,
  );

  if (agentNumber.length !== 11) {
    alert("please provide valid account number");
    return;
  }
  if (!withdrawAmount || isNaN(withdrawAmount) || withdrawAmount <= 0) {
    alert("Enter your withdrawal amount");
    return;
  }
  if (withdrawPin !== validPin) {
    alert("Please Provide valid pin");
    return;
  }

  const totalAvaiableBalance = availableBalance - withdrawAmount;
  document.getElementById("available-balance").innerText = totalAvaiableBalance;
});

//----------------Transfer money-----------------

document.getElementById("btn-send-now").addEventListener("click", function (e) {
  e.preventDefault();
  const transferNumber = document.getElementById("transfer-number").value;
  const transferAmount = parseInt(
    document.getElementById("transfer-amount").value,
  );
  const transferPin = parseInt(document.getElementById("transfer-pin").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText,
  );
  if (transferNumber.length !== 11) {
    alert("please provide valid account number");
    return;
  }
  if (!transferAmount || isNaN(transferAmount) || transferAmount <= 0) {
    alert("Enter your transfer amount");
    return;
  }
  if (transferPin !== validPin) {
    alert("Please Provide valid pin");
    return;
  }

  const totalNewAvaiableBalance = availableBalance - transferAmount;
  document.getElementById("available-balance").innerText =
    totalNewAvaiableBalance;
});

//   toggling feature
//add money click
document
  .getElementById("add-money-parent")
  .addEventListener("click", function () {
    document.getElementById("cashout-container").style.display = "none";
    document.getElementById("transfer-container").style.display = "none";
    document.getElementById("add-money-container").style.display = "block";
  });
//cashout click
document
  .getElementById("cashout-parent")
  .addEventListener("click", function () {
    document.getElementById("add-money-container").style.display = "none";
    document.getElementById("transfer-container").style.display = "none";
    document.getElementById("cashout-container").style.display = "block";
  });

//transfer click
document
  .getElementById("transfer-parent")
  .addEventListener("click", function () {
    document.getElementById("add-money-container").style.display = "none";
    document.getElementById("cashout-container").style.display = "none";
    document.getElementById("transfer-container").style.display = "block";
  });
