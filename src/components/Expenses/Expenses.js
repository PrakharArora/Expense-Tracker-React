import React , {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
      const [filteredYear , setFilteredYear] = useState('2020');
// Storing the Default Value for the Filter 
  const filterChangeHandler = selectedYear =>{

      setFilteredYear(selectedYear);
  }    

    return (
      <div>
           
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear}  onChangeFilter={filterChangeHandler} />
        {props.items.map((expense)=>(
            <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            Date = {expense.Date}
            />
        ))}
  
  </Card>
  </div>

    )
}

export default Expenses;