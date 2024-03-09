// step 1: get the input value using by function 
function getInputFieldValueById(inputFieldId){
    // step 1:1 : get the input value
    const inputValue = document.getElementById(inputFieldId);
    const inputFieldValueString = inputValue.value
    // step 1:2 : convert the value of input string to  number
    const newInputValue = parseFloat(inputFieldValueString);
    // step 1:3 : clear the input field
    inputValue.value = '';
    return newInputValue;
}

// step 2: get the total text value using by function
function getTextElementValueByID(textElementId){
    // step 2:1 : get the specific element by id 
    const textElement = document.getElementById(textElementId);
    const textElementValueString = textElement.innerText;
    // step 2:2 : convert the element value string to number 
    const previousTextElementValue = parseFloat(textElementValueString);
    return previousTextElementValue;
}

// step 3: set  the  value to the text element 
function setTextElementValueById(textElementValue, newValue){
    // step 3.1 : get the pecific element by id 
    const textElement = document.getElementById(textElementValue, newValue)
    // step 3.2: set the new value;
    textElement.innerText = newValue;
}