import React , {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
      const [filteredYear , setFilteredYear] = useState('2020');

    
// Storing the Default Value for the Filter 
const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
  
//     const filteredExpenses = props.items.filter((expense) => {
//       return expense.date.getFullYear().toString() === filteredYear;
//     });
    return (
      <div>
           
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear}  onChangeFilter={filterChangeHandler} />
        {/* {props.items.filter={filteredYear}} */}
        {props.items.map((expense)=>(
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date = {expense.date}
            />
        ))}
  
  </Card>
  </div>

    )
}

export default Expenses;