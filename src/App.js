import React , {useState} from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 2131,
    title: 'Car Insurance', 
    amount: 249.67,
    date: new Date(Date.UTC(2019, 10, 2, 3)),
  },

  {
    id: 131,
    title: 'Toilet Paper', 
    amount: 149.67,
    date: new Date(Date.UTC(2021, 10, 2, 3)),

  },

  {
    id: 9091,
    title: 'Brush', 
    amount: 9.67,
    date: new Date(Date.UTC(2019, 10, 2, 3)),

  },

  {
    id:8120,
    title: 'Mangoes', 
    amount: 10.7,
    date: new Date(Date.UTC(2020, 10, 2, 3)).toLocaleString(),

  }
];


const App = () => {
 const [expenses , setExpenses] = useState(DUMMY_EXPENSES)

const addExpenseHandler = (expense) => {
 
 setExpenses((prevExpenses)=>{
  console.log(expense)
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
