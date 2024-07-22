document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseName = document.getElementById('expense-name');
    const expenseAmount = document.getElementById('expense-amount');
    const expensetype = document.getElementById('expense-type');
    const expenseList = document.getElementById('expense-list');
    const totalAmount = document.getElementById('total-amount');
 
   

    let total = 0;

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = expenseName.value;
        const amount = parseFloat(expenseAmount.value);
        const typeofExpanse=expensetype.value;

        if (name && amount && typeofExpanse) {
            addExpense(name, amount,typeofExpanse);
            updateTotal(amount);
            clearForm();
           
        }
    });

    function addExpense(name, amount,typeofExpanse) {
        const liTag = document.createElement('li');
        liTag.className = 'list-group-item d-flex justify-content-between align-items-center';
        liTag.innerHTML = name + " " + " " + amount + "Rs." + " "+ typeofExpanse

    let deleteBtn=document.createElement('button');
    deleteBtn.innerText='delete';
    deleteBtn.className = 'btn btn-danger btn-sm ml-2';
    deleteBtn.addEventListener('click', ()=>deleteExpense(liTag, amount))

    let editBtn=document.createElement('button');
    editBtn.innerText='Edit';
    editBtn.className = 'btn btn-warning btn-sm ml-2';
    editBtn.addEventListener('click', ()=>editExpense(liTag,name,amount,typeofExpanse))

            

        liTag.appendChild(deleteBtn)
        liTag.appendChild(editBtn)

        expenseList.appendChild(liTag);
    }

    function updateTotal(amount) {
        total += amount;
        totalAmount.textContent = total;
    }

    function clearForm() {
        expenseName.value = '';
        expenseAmount.value = '';
        expensetype.value='';
    }

    function deleteExpense(liTag,amount){
     expenseList.removeChild(liTag)
     total -= amount;
     totalAmount.textContent=total;
    }

    function editExpense(liTag,name,amount,typeofExpanse){
        expenseName.value = name;
        expenseAmount.value = amount;
        expensetype.value=typeofExpanse;
        deleteExpense(liTag, amount);
    }
});
