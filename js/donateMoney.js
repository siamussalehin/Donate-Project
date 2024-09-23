document.getElementById('btn-donate-money').addEventListener('click', function(){
    
    
    const donateMoney = getInputById('input-donate');
    const gettingAmount = calledDonateBtn('accountBalance', 'input-donate')
    

    if(isNaN(donateMoney)){
        alert('Failed to donate');
        return;
    }
    

    if(donateMoney > 0){
        const balance = getTextById('balance');
        
        
        
        const newBalance = balance + donateMoney;
        document.getElementById('balance').innerText = newBalance;
        const accountBalance = document.getElementById('account-balance').innerText;
        const newAccountBalance = accountBalance - donateMoney;
        document.getElementById('account-balance').innerText = newAccountBalance;

        //add to donate history//
        const div = document.createElement('div');
        div.classList.add('w-10/12 mx-auto border-solid border-2 rounded-lg p-5');
        div.innerHTML = `
        <h4 class ="text-2xl font-bold"> ${donateMoney} Tk is Donated for Donate for Flood at Noakhali, Bangladesh</h4>
        <p class = "gray-color">Date: ${new Date()}.toLocalString()}
        (Bangladesh Standard Time);
        `
        document.getElementById('transaction-container').appendChild(div);
        // const p = document.createElement('p');
        // p.innerText = `${donateMoney}`
        // document.getElementById('transaction-container').appendChild(p);
        
    }
    else if(donateMoney > accountBalance){
        alert('You do not have enough money to donate');
        return;
    }
    
    else{
        alert('Failed to donate')
    }
})