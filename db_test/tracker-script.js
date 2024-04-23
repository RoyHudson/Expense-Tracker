document.addEventListener('DOMContentLoaded', function(){

    wallets = [];

    const formWallet = document.getElementById('formWallet');
    formWallet.addEventListener('submit', function(e) {
        e.preventDefault();

        let walletName = document.getElementById('walletName').value;
        let walletBalance = document.getElementById('walletBalance').value; 

        const wallet = {
            name: walletName,
            balance: walletBalance,
            expenses: [],
            incomes: [],
            transactions: [],
            };

            console.log(wallet)
            wallets.push(formWallet.wallet);
            console.log(wallets);
        // const formExpense = document.getElementById('addExpenseContainer');
        // formExpense.addEventListener('submit', function(e) {

        //     let descriptionExpense = document.getElementById('descriptionExpense').value;
        //     let amountExpense = document.getElementById('amountExpense').value;
        //     let dateExpense = document.getElementById('dateExpense').value;

        //     let expenses = {
        //         description: descriptionExpense,
        //         amount: amountExpense,
        //         date: dateExpense,
        //     };

        //     wallets.push(expenses.description, expenses.amount, expenses.date);

        //     console.log(expenses);

        // });

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