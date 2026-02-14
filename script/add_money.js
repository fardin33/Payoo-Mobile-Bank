document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Amount
    const amount = document.getElementById("amount").value;
    const finalAmount = parseFloat(amount);

    // Pin
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);

    // Main Balance
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (convertedPin === 1234 && finalAmount > 0) {
      const sum = convertedMainBalance + finalAmount;
      document.getElementById("main-balance").innerText = sum;
    } else {
      alert("Wrong PIN or Invalid Amount");
    }
  });
   