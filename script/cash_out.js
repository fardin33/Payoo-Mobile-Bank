document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //   cash-out-pin
    const PIN = document.getElementById("cash-out-pin").value;
    convertedPin = parseInt(PIN);

    //   cash-out-amount
    const amount = document.getElementById("cash-out-amount").value;
    convertedAmount = parseFloat(amount);

    //   main balance
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    //   Check pin true or false
    if (convertedPin === 1234) {
      const sum = convertedMainBalance - convertedAmount;
      document.getElementById("main-balance").innerText = sum;
    } else {
      alert("Enter Valid Pin");
    }
  });
