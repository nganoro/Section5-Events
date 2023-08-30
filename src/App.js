import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

const testExpenses = [
  {id: 'e1', title: 'Nikon F3', amount: 350.67, date: new Date("2023-12-12")},
  {id: 'e2', title: 'New TV', amount: 799.49, date: new Date("2021, 2, 12")},
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date("2022, 2, 28"),
  },
  {
    id: 'e4',
    title: 'Monitor',
    amount: 450,
    date: new Date("2020, 5, 12"),
  },
  {
    id: 'e4',
    title: 'Laptop',
    amount: 1500,
    date: new Date("2020, 5, 12"),
  },
]

function App() {
  const [expenses, setExpenses] = useState(testExpenses);

  const addExpenseHandler = (newExpense) => {
    //if what you update depends on its previous state, use below
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense];  
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpenseHandler={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
