




//step 1 

document.getElementById('btn-deposit').addEventListener('click',function(){


    //step 2
    const depositField =  document.getElementById('deposit-field');

    const newDepositAmountString = depositField.value;

    const newDepositAmount = parseFloat(newDepositAmountString);

 
    //step 3

    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotalSting = depositTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalSting);
    //step 4 add number to set the total  deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    //step 5 get current blance total

    const balanceTotalElement = document.getElementById('balance-total');

    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    //step 6 calculate current total value 

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //SET THE BALANCE TOTAL

    balanceTotalElement.innerText = currentBalanceTotal;










    //step - 7:

    depositField.value = '';
    
    
  
})