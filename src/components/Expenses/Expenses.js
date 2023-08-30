import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../../UI/Card'
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(`${selectedYear} selected!`)  
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} yearSelected={filterChangeHandler}/>
                <ExpenseList filteredExpenses={filteredExpenses}/>
                <ExpenseChart expenses={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;

