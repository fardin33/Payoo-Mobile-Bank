const addMoneyBox = document.getElementById("add-money-box");
const cashOutBox = document.getElementById("cash-out-box");

const addMoneySection = document.getElementById("Add-Money");
const cashOutSection = document.getElementById("cash-out");

const transactionHistory = document.getElementById("transaction-history");

// text styling
const addMoneyText = document.getElementById("add-money-text");
const cashOutText = document.getElementById("cash-out-text");

// Add Money click
addMoneyBox.addEventListener("click", function () {
  // toggle Section
  addMoneySection.style.display = "block";
  cashOutSection.style.display = "none";
  transactionHistory.style.display = "none";

  // add-money border active styling
  addMoneyBox.classList.add("border-blue-700", "bg-blue-50");
  addMoneyText.classList.add("text-blue-600");

  // add-money border disable/inactive styling
  cashOutBox.classList.remove("border-blue-700", "bg-blue-50");
  cashOutText.classList.remove("text-blue-600");
});

// Cash Out click
cashOutBox.addEventListener("click", function () {
  // section toggle
  cashOutSection.style.display = "block";
  addMoneySection.style.display = "none";
  transactionHistory.style.display = "none";

  // cash out border & text active styling
  cashOutBox.classList.add("border-blue-700", "bg-blue-50");
  cashOutText.classList.add("text-blue-600");

  // cash out border & text disable/active styling
  addMoneyBox.classList.remove("border-blue-700", "bg-blue-50");
  addMoneyText.classList.remove("text-blue-600");
});
