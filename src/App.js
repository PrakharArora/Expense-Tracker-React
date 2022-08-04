import React , {useState} from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    title: 'Car Insurance', 
    amount: 249.67,
    Date: new Date(2021, 2, 28),
  },

  {
    title: 'Toilet Paper', 
    amount: 149.67,
    Date: new Date(2021, 2, 28),
  },

  {
    title: 'Brush', 
    amount: 9.67,
    Date: new Date(2021, 2, 28),
  },

  {
    title: 'Mangoes', 
    amount: 10.7,
    Date: new Date(2021, 2, 28),
  }
];


const App = () => {
 const [expenses , setExpenses] = useState(DUMMY_EXPENSES)

const addExpenseHandler = (expense) => {
 
 setExpenses((prevExpenses)=>{

  return [expense, ...prevExpenses];
 });
   
};
  return (
    <div className="App">
      <NewExpense onAddexpense={addExpenseHandler} />
      <Expenses items ={expenses} />
  
     
    </div>
  );
}

export default App;
