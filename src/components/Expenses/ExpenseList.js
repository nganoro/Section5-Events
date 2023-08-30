import { Fragment } from "react";
import ExpenseItem from './ExpenseItem';

function ExpenseList (props) {
    
    if(props.filteredExpenses === 0){
        return <h2 className="expenses-list__fallback">Found No Expenses</h2>
    }
    return (
        <ul className="expenses-list">
            {props.filteredExpenses.map(expense => 
            <ExpenseItem
                key={expense.id} 
                title={expense.title} 
                amount={expense.amount}
                date={expense.date} />
            )}
        </ul>
    )
}

export default ExpenseList;
