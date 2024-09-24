document.getElementById('btn-donate-money').addEventListener('click', function () {


    const donateMoney = getInputById('input-donate');
    const balance = getTextById('balance');
    const accountBalance = getTextById('account-balance');

    if (isNaN(donateMoney) || donateMoney > accountBalance || donateMoney < 0) {
        alert('Failed to donate');
        return;
    }
    else {
        my_modal_1.showModal();
    }

    const donateCollectionAmount = donateMoney + balance;
    const newAccountBalance = accountBalance - donateMoney;
    document.getElementById('balance').innerText = donateCollectionAmount;
    document.getElementById('account-balance').innerText = newAccountBalance;



    //add to donate history//
    const historyItem = document.createElement('div');
    historyItem.className = 'border-solid border-2 rounded-lg p-5';
    historyItem.innerHTML = `
        <h4 class ="text-2xl font-bold"> ${donateMoney} Tk is Donated for Donate for Flood at Noakhali, Bangladesh</h4>
       <p>Date: ${new Date().toLocaleString()} (Bangladesh Standard Time)
        `;
    const historySection = document.getElementById('history-section');
    historySection.insertBefore(historyItem, historySection.firstChild);

})

//For feni//
document.getElementById('btn-donate-money-feni')
    .addEventListener('click', function () {

        const donateMoney = getInputById('input-donate-feni');
        const balance = getTextById('balance-feni');
        const accountBalance = getTextById('account-balance');

        if (isNaN(donateMoney) || donateMoney > accountBalance || donateMoney < 0) {
            alert('Failed to donate');
            return;
        }
        else {
            my_modal_2.showModal();
        }

        const donateCollectionAmount = donateMoney + balance;
        const newAccountBalance = accountBalance - donateMoney;
        document.getElementById('balance-feni').innerText = donateCollectionAmount;
        document.getElementById('account-balance').innerText = newAccountBalance;


        //add to donate history
        const historyItem = document.createElement('div');
    historyItem.className = 'border-solid border-2 rounded-lg p-5';
    historyItem.innerHTML = `
        <h4 class ="text-2xl font-bold"> ${donateMoney} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
       <p>Date: ${new Date().toLocaleString()} (Bangladesh Standard Time)
        `;
    const historySection = document.getElementById('history-section');
    historySection.insertBefore(historyItem, historySection.firstChild);

    })

//For qota//
document.getElementById('btn-donate-money-qota')
    .addEventListener('click', function () {

        const donateMoney = getInputById('input-donate-qota');
        const balance = getTextById('balance-qota');
        const accountBalance = getTextById('account-balance');

        if (isNaN(donateMoney) || donateMoney > accountBalance || donateMoney < 0) {
            alert('Failed to donate');
            return;
        }
        else {
            my_modal_3.showModal();
        }

        const donateCollectionAmount = donateMoney + balance;
        const newAccountBalance = accountBalance - donateMoney;
        document.getElementById('balance-qota').innerText = donateCollectionAmount;
        document.getElementById('account-balance').innerText = newAccountBalance;


        //add to donate history
        const historyItem = document.createElement('div');
    historyItem.className = 'border-solid border-2 rounded-lg p-5';
    historyItem.innerHTML = `
        <h4 class ="text-2xl font-bold"> ${donateMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4>
       <p>Date: ${new Date().toLocaleString()} (Bangladesh Standard Time)
        `;
    const historySection = document.getElementById('history-section');
    historySection.insertBefore(historyItem, historySection.firstChild);


    })

// Show Button//
//Donation tab
document.getElementById('show-donate-section').addEventListener('click', function () {
    showSectionById('donate-section');
    document.getElementById('show-history-section').classList.remove('bg-lime-300')
    document.getElementById('show-history-section').classList.add('bg-gray-100')
    document.getElementById('show-donate-section').classList.add('bg-lime-300')
    document.getElementById('show-donate-section').classList.remove('bg-gray-100')
})
//History tab
document.getElementById('show-history-section').addEventListener('click', function () {
    showSectionById('history-section');
    document.getElementById('show-history-section').classList.add('bg-lime-300')
    document.getElementById('show-history-section').classList.remove('bg-gray-100')
    document.getElementById('show-donate-section').classList.remove('bg-lime-300')
    document.getElementById('show-donate-section').classList.add('bg-gray-100')

})
