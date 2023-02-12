// add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // update deposit amount
    const depositField = document.getElementById('deposit-field');
    const newDeposit = Number(depositField.value);

    const depositContainer = document.getElementById('deposit-amount');
    const previousDeposit = Number(depositContainer.innerText);
    const currentTotalDeposit = previousDeposit + newDeposit;
    depositContainer.innerText =  currentTotalDeposit;

    // update balance amount
    const balanceContainer = document.getElementById('balance-amount');
    const previousBalance = Number(balanceContainer.innerText);
    const currentTotalBalance = previousBalance + newDeposit;
    balanceContainer.innerText = currentTotalBalance;
    

    depositField.value = '';
})