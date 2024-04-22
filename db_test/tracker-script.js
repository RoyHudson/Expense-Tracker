document.addEventListener('DOMContentLoaded', function(){
    const formWallet = document.getElementById('formWallet');
    formWallet.addEventListener('submit', function(e) {
        e.preventDefault();

        let walletName = document.getElementById('walletName').value;
        let walletBalance = document.getElementById('walletBalance').value; 

        const wallets = {
            name: walletName,
            balance: walletBalance,
            expenses: [],
            incomes: [],
            };

        function addExpense (){
            
        }

        console.log(wallets)
    });
});



// Object properties
// const wallets = {
//     title: walletName.value,
//     balance: BalanceInput.value,
//     expenses: {
//         expensesDescription: wallets.expenses.description,
//         expensesAmount: wallets.expenses.amount,
//         expensesDate: wallets.expenses.date,
//         expensesCategory:{
//             name: category.name,
//             subcategory: category.subcategory
//         }
//     },
//     incomes: {
//         incomesDescription: wallets.incomes.description,
//         incomesAmount: wallets.incomes.amount,
//         incomesDate: wallets.incomes.date,
//         incomesCategory:{
//             name: category.name,
//             subcategory: category.subcategory
//         }
//     },
//     transactions: {
//         transactionsDescription: wallets.transactions.description,
//         walletFromTransaction: wallets.walletFromTransaction,
//         walletReciveTransaction: wallets.walletReciveTransaction
//     },
// };



// Save Object Wallet
// formWallet.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const fd = new FormData(formWallet);
//     const walletObj = Object.fromEntries(fd);
//     console.log(walletObj);
// });