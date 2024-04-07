document.addEventListener("DOMContentLoaded", function () {
    // Elementos del DOM
    const addWalletButton = document.getElementById("addWallet");
    const walletName = document.getElementById("walletName");
    const initialBalanceInput = document.getElementById("initialBalance");
    const walletsList = document.getElementById("walletsList");
    // Expenses
    const expenseDescription = document.getElementById('expenseDescription');
    const expenseAmount = document.getElementById('expenseAmount');
    const expenseDate = document.getElementById('expenseDate');
    const showAddWalletButton = document.getElementById('showAddWalletButton');
    const addExpenseButtonContainer = document.getElementById('addExpenseButtonContainer');
    const expenseForm = document.getElementById('expenseForm');
    // Incomes
    const incomeDescription = document.getElementById('incomeDescription');
    const incomeAmount = document.getElementById('incomeAmount');
    const incomeForm = document.getElementById('incomeForm');

    let wallets = [];
    let selectedWalletId = null;

    // Mostrar formulario de agregar cartera
    showAddWalletButton.addEventListener("click", function() {
        document.getElementById('addWalletContainer').classList.toggle('hidden');
    });

    // Cancelar agregar gasto
    document.getElementById('cancelWallet').addEventListener('click', function() {
        addWalletContainer.classList.add('hidden');
        // Opcionalmente, limpiar el formulario
        walletName.value = '';
        initialBalance.value = '';
        });

    // Agregar una cartera
    addWalletButton.addEventListener("click", function () {
        const wallet = {
            id: Date.now(),
            title: walletName.value,
            balance: parseFloat(initialBalanceInput.value),
            expenses: [],
            incomes: [],
            addExpense: function(description, amount) { // Corrección aquí
                this.expenses.push({description, amount, date: new Date()});
                this.balance -= amount;
            },
            addIncome: function(description, amount) { // Corrección aquí
                this.incomes.push({description, amount, date: new Date()});
                this.balance += amount;
            }
        };
        wallets.push(wallet);

        // Limpiar formulario
        walletName.value = '';
        initialBalanceInput.value = '';

        updateWalletsList();
        document.getElementById('addWalletContainer').classList.add('hidden');
    });

    // Mostrar formulario de gastos
    function showExpenseForm(walletId) {
        selectedWalletId = walletId;
        expenseForm.classList.remove('hidden');        
    }

    function showIncomeForm(walletId) {
        selectedWalletId = walletId;
        incomeForm.classList.remove('hidden');
    }

    function showTransactionsForm(walletId) {
        selectedWalletId = walletId;
        transactionsForm.classList.remove('hidden');
    }

    // Guardar un gasto
    document.getElementById('saveExpense').addEventListener('click', function() {
        const description = expenseDescription.value;
        const amount = parseFloat(expenseAmount.value);
        const wallet = wallets.find(w => w.id === selectedWalletId);

        if (wallet) {
            wallet.addExpense(description, amount);
            updateWalletsList();
            updateWalletDetails();
        } else {
            console.error('No se pudo encontrar la cartera.');
        }

        // Limpiar formulario de gastos
        expenseDescription.value = '';
        expenseAmount.value = '';
        expenseForm.classList.add('hidden');
    });

    // Cancelar agregar gasto
    document.getElementById('cancelExpense').addEventListener('click', function() {
    expenseForm.classList.add('hidden');
    // Opcionalmente, limpiar el formulario
    expenseDescription.value = '';
    expenseAmount.value = '';
    });


    //Guardar ingreso
    document.getElementById('saveIncome').addEventListener('click', function() {
        const description = incomeDescription.value;
        const amount = parseFloat(incomeAmount.value);
        const wallet = wallets.find(w => w.id === selectedWalletId);

        if (wallet) {
            wallet.addIncome(description, amount);
            updateWalletsList();
            updateWalletDetails();
        } else {
            console.error('No se pudo encontrar la cartera.');
        }

        incomeDescription.value = '';
        incomeAmount.value = '';
        incomeForm.classList.add('hidden');
    });

    document.getElementById('cancelIncome').addEventListener('click', function() {
        incomeForm.classList.add('hidden');
        // Opcionalmente, limpiar el formulario
        incomeDescription.value = '';
        incomeAmount.value = '';
    });

    // Actualizar la lista de carteras
    function updateWalletsList() {
        const walletDetailsInfo = document.getElementById("walletDetails-info");
    
        walletDetailsInfo.innerHTML = '';
        walletsList.innerHTML = '';

        wallets.forEach(wallet => {
            const li = document.createElement("li");
            li.classList.add("wallet-button"); // Añadir clase para estilizar como botón
            li.textContent = wallet.title; // Cambiar para mostrar solo el título
    
            // Evento para mostrar el balance al pasar el mouse
            li.addEventListener("mouseover", function() {
                this.textContent = `$${wallet.balance.toFixed(2)}`;
            });
    
            // Evento para volver al nombre al quitar el mouse
            li.addEventListener("mouseout", function() {
                this.textContent = wallet.title;
            });
    
            li.addEventListener("click", function() {
                showWalletDetails(wallet);
            });
    
            walletsList.appendChild(li);
        });
    
        // Removido el chequeo que causaba el error
        if (selectedWalletId) {
            const wallet = wallets.find(w => w.id === selectedWalletId);
            if (wallet) {
                updateWalletDetails(wallet); // Asegúrate de que esta función ahora acepte un parámetro `wallet`
            }
        } else {
            console.log('No hay una cartera seleccionada para actualizar los detalles.');
            // Puedes optar por limpiar o mantener la última vista de detalles de cartera aquí.
        }
    }

function updateWalletDetails() {
    const walletDetailsInfo = document.getElementById("walletDetails-info");
    const wallet = wallets.find(w => w.id === selectedWalletId);

    walletDetailsInfo.innerHTML = ''; // Limpiar la lista antes de agregar los nuevos detalles

    
    const expensesTitle = document.createElement('')

    // Añadir los ingresos a la lista
    const incomesTitle = document.createElement('li');
    incomesTitle.textContent = 'Incomes:';
    walletDetailsInfo.appendChild(incomesTitle);

    wallet.incomes.forEach((income, index) => {
        const incomeItem = document.createElement('li');
        incomeItem.textContent = `${income.description}: $${income.amount.toFixed(2)} - ${income.date.toLocaleDateString()}`;

        // Botón eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteIncome(index);

        // Botón editar
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = () => editIncome(index);

        incomeItem.appendChild(deleteButton);
        incomeItem.appendChild(editButton);
        walletDetailsInfo.appendChild(incomeItem);
    });
}
function deleteExpense(index) {
    // Aquí deberías eliminar el gasto del array de gastos y luego actualizar los detalles
    console.log(`Eliminar gasto en el índice ${index}`);
    updateWalletDetails(); // Llamar después de actualizar los datos
}

function editExpense(index) {
    // Aquí deberías manejar la lógica de edición para un gasto
    console.log(`Editar gasto en el índice ${index}`);
    // Posiblemente mostrar un formulario para editar
}

function deleteIncome(index) {
    // Similar a deleteExpense, pero para ingresos
    console.log(`Eliminar ingreso en el índice ${index}`);
    updateWalletDetails();
}

function editIncome(index) {
    // Similar a editExpense, pero para ingresos
    console.log(`Editar ingreso en el índice ${index}`);
    // Mostrar un formulario para editar
}

// Llamar a updateWalletDetails dentro de las funciones de guardar y después de seleccionar una cartera para ver sus detalles

function showWalletDetails(wallet) {
    // Asegúrate de que los elementos existen
    const walletDetails = document.getElementById("walletDetails-buttons");
    const addExpenseButton = document.getElementById("addExpenseButton");
    const addIncomeButton = document.getElementById("addIncomeButton");
    const addTransactionButton = document.getElementById("addTransactionButton");
    const nameWallet = document.getElementById("nameWallet");

    // Limpia el contenedor de detalles si es necesario
    // walletDetails.innerHTML = ''; // Esto no es necesario ya que los botones ya están en el DOM
    selectedWalletId = wallet.id;
    nameWallet.innerText = wallet.title
    // Hace visible los botones
    addExpenseButton.classList.remove("hidden");
    addIncomeButton.classList.remove("hidden");
    addTransactionButton.classList.remove("hidden");

    // Configura los eventos onclick para cada botón
    addExpenseButton.onclick = function() { showExpenseForm(wallet.id); };
    addIncomeButton.onclick = function() { showIncomeForm(wallet.id); };
    addTransactionButton.onclick = function() { showTransactionsForm(wallet.id); };

    // Asegúrate de que el contenedor de detalles no esté oculto
    walletDetails.classList.remove("hidden");
    // Actualiza los detalles de la cartera seleccionada
    updateWalletDetails();
}

});