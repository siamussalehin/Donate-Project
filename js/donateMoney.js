document.getElementById('btn-donate-money').addEventListener('click', function(){
    
    
    const donateMoney = getInputById('input-donate');
    

    if(donateMoney !== "number"){
        const balance = getTextById('balance');
        const newBalance = balance + donateMoney;
        document.getElementById('balance').innerText = newBalance;
        console.log(balance)
       
    }
    else{
        alert('Failed to donate')
    }
})