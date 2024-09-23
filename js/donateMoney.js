document.getElementById('btn-donate-money').addEventListener('click', function(){
    
    
    const donateMoney = getInputById('input-donate');
    

    if(donateMoney > 0){
        const balance = getTextById('balance');
        const newBalance = balance + donateMoney;
        document.getElementById('balance').innerText = newBalance;
        const accountBalance = document.getElementById('account-balance').innerText;
        const newAccountBalance = accountBalance - donateMoney;
        document.getElementById('account-balance').innerText = newAccountBalance;
        
       
    }
    else{
        alert('Failed to donate')
    }
})