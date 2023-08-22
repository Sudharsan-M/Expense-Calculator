import React , { useState } from "react";
import './Expense.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFillter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
const Expense = (props) => {
    const [filteredYear,setFilteredYear] = useState('2020');
    const fillterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    };
    const FillteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    
    return(
        <div>
            
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFillter={fillterChangeHandler} />
            <ExpensesChart expenses = {FillteredExpenses}/>
            <ExpensesList items={FillteredExpenses}/>
            
        </Card>
        </div>
    )
};

export default Expense;