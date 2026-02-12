document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Account Number
    const accountNumber = document.getElementById("account-number").value;
    console.log("Account Number :", accountNumber);

    // Account PIN
    const Pin = document.getElementById("account-pin").value;
    const accountPin = parseInt(Pin);
    console.log("Account PIN :", Pin);

    //   Account Number & PIN Conditions
    if (accountNumber.length === 11) {
      if (accountPin === 1234) {
        window.location.href = "./home.html";
        //    console.log("Login Successful!");
      } else {
        alert("Incorrect PIN");
      }
    } else {
      alert("Invalid credential,Please Try Again");
    }
  });
