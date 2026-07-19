const validPin = 1234;
const transactionData = [];

//---------------add money--------------
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = getInputValue("bank");
    const accountNumber = getInputValue("account-number");
    const amount = getInputValueNumber("add-amount");
    const pin = getInputValueNumber("add-pin");
    const availableBalance = getinputInnerTextNumber("available-balance");
    // const bank = document.getElementById("bank").value;
    // const accountNumber = document.getElementById("account-number").value;
    // const amount = parseInt(document.getElementById("add-amount").value);
    // const pin = parseInt(document.getElementById("add-pin").value);
    // const availableBalance = parseInt(
    //   document.getElementById("available-balance").innerText,
    // );
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
    setInnerText(totalNewAvaiableBalance);

    const data = {
      img: "./assets/wallet1.png",
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
  });

//--------------------------cash out--------------------------

document.getElementById("btn-withdraw").addEventListener("click", function (e) {
  e.preventDefault();
  // shortcut
  const agentNumber = getInputValue("agent-number");
  const withdrawAmount = getInputValueNumber("withdraw-amount");
  const withdrawPin = getInputValueNumber("withdraw-pin");
  const availableBalance = getinputInnerTextNumber("available-balance");

  if (agentNumber.length !== 11) {
    alert("please provide valid account number");
    return;
  }
  if (
    !withdrawAmount ||
    isNaN(withdrawAmount) ||
    withdrawAmount <= 0 ||
    withdrawAmount > availableBalance
  ) {
    alert("Enter your valid amount");
    return;
  }
  if (withdrawPin !== validPin) {
    alert("Please Provide valid pin");
    return;
  }

  const totalNewAvaiableBalance = availableBalance - withdrawAmount;
  setInnerText(totalNewAvaiableBalance);

  const data = {
    img: "./assets/send1.png",
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
});

//----------------Transfer money-----------------

document.getElementById("btn-send-now").addEventListener("click", function (e) {
  e.preventDefault();
  //short cut
  const transferNumber = getInputValue("transfer-number");
  const transferAmount = getInputValueNumber("transfer-amount");
  const transferPin = getInputValueNumber("transfer-pin");
  const availableBalance = getinputInnerTextNumber("available-balance");
  if (transferNumber.length !== 11) {
    alert("please provide valid account number");
    return;
  }
  if (
    !transferAmount ||
    isNaN(transferAmount) ||
    transferAmount <= 0 ||
    transferAmount > availableBalance
  ) {
    alert("Enter your valid amount");
    return;
  }
  if (transferPin !== validPin) {
    alert("Please Provide valid pin");
    return;
  }

  const totalNewAvaiableBalance = availableBalance - transferAmount;
  setInnerText(totalNewAvaiableBalance);

  const data = {
    img: "./assets/money1.png",
    name: "Transfer Money",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
});
//-------------------get bonus------------------
document
  .getElementById("btn-get-bonus")
  .addEventListener("click", function (e) {
    e.preventDefault();
  });
//-------------------pay bill------------------
document.getElementById("btn-pay-bill").addEventListener("click", function (e) {
  e.preventDefault();
});
//-------------------transaction------------------
document
  .getElementById("btn-transaction-parent")
  .addEventListener("click", function () {
    const transactionCard = document.getElementById("transaction-card");
    transactionCard.innerText = "";
    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
       <div class="flex justify-between items-center bg-white mt-3 p-4 rounded-lg">
                    <div class="flex gap-3 items-center">
                        <img src="${data.img}" class=" rounded-full p-3 mx-auto bg-[#F4F5F7]" alt="">
                        <div>
                            <h1 class="font-semibold">${data.name}</h1>
                            <p class="text-[12px] text-[#08080880]">${data.date}</p>
                        </div>
                    </div>
                    <span class="rotate-90">
                        <i class="fa-solid fa-lg fa-ellipsis"></i>
                    </span>
                </div>
      
                `;
      transactionCard.appendChild(div);
    }
  });

//------------------------toggling feature---------------------
//add money click
document
  .getElementById("btn-add-money-parent")
  .addEventListener("click", function () {
    handleToggling("add-money-container");
    handleButtonToggle("btn-add-money-parent");
  });
//cashout click
document
  .getElementById("btn-cashout-parent")
  .addEventListener("click", function () {
    handleToggling("cashout-container");
    handleButtonToggle("btn-cashout-parent");
  });
//transfer click
document
  .getElementById("btn-transfer-parent")
  .addEventListener("click", function () {
    handleToggling("transfer-container");
    handleButtonToggle("btn-transfer-parent");
  });
//----------------------get bonus------------------------
document
  .getElementById("btn-get-bonus-parent")
  .addEventListener("click", function () {
    handleToggling("get-bonus-container");
    handleButtonToggle("btn-get-bonus-parent");
  });
//----------------------pay bill------------------------
document
  .getElementById("btn-pay-bill-parent")
  .addEventListener("click", function () {
    handleToggling("pay-bill-container");
    handleButtonToggle("btn-pay-bill-parent");
  });
//----------------------transaction------------------------
document
  .getElementById("btn-transaction-parent")
  .addEventListener("click", function () {
    handleToggling("transaction-container");
    handleButtonToggle("btn-transaction-parent");
  });

//------------------------------------------------------------------------------
//function to get input innerText
function getinputInnerTextNumber(id) {
  // const element = document.getElementById(id);
  // const elementInnertext = element.innerText;
  // const elementInnertextNumber = parseInt(elementInnertext);
  // return elementInnertextNumber;
  return parseInt(document.getElementById(id).innerText);
}
//function to get input values
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}
// function to get input values number convert
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}
//function to set inner text\
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
  return availableBalanceElement;
}

//------------------toggling function-------------------------

function handleToggling(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
    document.getElementById(id).style.display = "block";
  }
}
// function to get toggle button
function handleButtonToggle(id) {
  const btnForms = document.getElementsByClassName("btn-form");
  for (const btn of btnForms) {
    btn.classList.remove("border-[#0874F2]", "bg-[#0874F20D]");
    btn.classList.add("border-gray-200");
  }
  document.getElementById(id).classList.remove("border-gray-200");
  document
    .getElementById(id)
    .classList.add("border-[#0874F2]", "bg-[#0874F20D]");
}
