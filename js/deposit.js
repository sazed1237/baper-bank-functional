
// step 1: add the event handler on deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit button clicked')

// step 2: get the deposit input value using by funtion
    const newDepositAmount = getInputFieldValueById('deposit-input-field')
    // console.log(newDepositAmount);

// step 3: get the previous deposit value using by  function
    const previousTextElementTotal = getTextElementValueByID('total-deposit')
    // console.log(typeof previousTextElementTotal);

// step 4: calculate previous deposit and new deposit value
    const newDepositTotal = previousTextElementTotal + newDepositAmount;

// step 5: set the calculating value to total deposit
    setTextElementValueById('total-deposit', newDepositTotal)
    
// step 6: get get the previous total balace using by function
    const previousTextBalanceTotal = getTextElementValueByID('total-balance')

// step 7: calculate the previous balance and new deposit balace
    const newBalanceTotal = previousTextBalanceTotal + newDepositAmount;
    
// step 8: set the calculating balance to  the total balace
    setTextElementValueById('total-balance', newBalanceTotal)

})