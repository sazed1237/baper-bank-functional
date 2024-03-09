// step 1: add the event handler withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('withdraw button clicked')

// step 2: get the  input value using by function 
    const newWithdrawAmount = getInputFieldValueById('withdraw-input-field');

// step 3: get the previous withdraw total using by function
    const previousTextWithdrawTotal = getTextElementValueByID('total-withdraw')

// step 4: calculate the previous total and new withdraw ammount
    const newWithdrawTotal = previousTextWithdrawTotal + newWithdrawAmount;

// step 5: set the calculate ammount to withdraw total 
    setTextElementValueById('total-withdraw', newWithdrawTotal);

// step 6: get the  previous total Balance 
    const previousTextBalanceTotal = getTextElementValueByID('total-balance');

// step 7: calculate the previous total balance and new withdraw balance
    const newBalanceTotal = previousTextBalanceTotal - newWithdrawAmount;

// step 8: set the value of calculating new balance
    setTextElementValueById('total-balance', newBalanceTotal);
})