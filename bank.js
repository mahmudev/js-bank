function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputFieldValue;
}
function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const textElementValue = parseFloat(element.innerText);
  element.value = "";
  return textElementValue;
}
function setTextElementById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputValueById("deposit-field");
  const previousDepositTotal = getElementValueById("deposit-total");
  const newDepositTotal = newDepositAmount + previousDepositTotal;
  setTextElementById("deposit-total", newDepositTotal);
  const previousBalanceTotal = getElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementById("balance-total", newBalanceTotal);
});
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputValueById("withdraw-field");
  const previousWithdrawTotal = getElementValueById("withdraw-total");
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementById("withdraw-total", newWithdrawTotal);
  const previousBalanceTotal = getElementValueById('balance-total')
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementById("balance-total", newBalanceTotal);
});
