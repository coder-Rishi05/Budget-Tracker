const form = document.querySelector("#budget-form");

const desc = document.querySelector("#Description");

const inputAmount = document.querySelector("#amt");

const categorySelect = document.querySelector("#Category");

const expenseList = document.querySelector(".expense-list");

const btn = document.querySelector("#Expense");

const error = document.querySelector("#description-error");

let expenses = [];

btn.addEventListener("click", () => {
  console.log("expense btn clicked");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const Discription = desc.value;
  const Amount = inputAmount.value;
  const Category = categorySelect.value;

  error.textContent = "";
  error.style.display = "none";

  if (!Discription || Discription.trim() === "") {
    error.textContent = "Enter the discription";
    error.style.display = "block";
    return
    
  }
  let expense = {
    description: Discription,
    amount: Amount,
    category: Category,
  };

  expenses.push(expense);
  console.log(expenses);
  form.reset();
  displayExpenses();

});

function displayExpenses() {
  expenseList.innerHTML = "";

  expenses.forEach((e) => {
    const list = document.createElement("li");
    list.textContent = `${e.description} - ${e.amount}$   - ${e.category}`;

    if (e.category === "Rent") {
      list.classList.add("rent-expense");
    } else if (e.category === "Entertainment") {
      list.classList.add("entertainment-expense");
    } else {
      list.classList.add("groceries-expense");
    }

    expenseList.appendChild(list);
  });
}
