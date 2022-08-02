import './App.css';
import Expenses from './components/Expenses/Expenses';


const App = () => {
 
const expenses = [
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
  return (
    <div className="App">
          <h1>Lets Get Started</h1>
      <Expenses items ={expenses} />
  
     
    </div>
  );
}

export default App;
