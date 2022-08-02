import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = (props) => {

    return (
        <Card className="expenses">

        <ExpenseItem title={props.items[0].title} 
        amount={props.items[0].amount} 
        Date={props.items[0].Date}>
  </ExpenseItem>

  <ExpenseItem title={props.items[1].title} 
        amount={props.items[1].amount} 
        Date={props.items[1].Date}>
  </ExpenseItem>

  <ExpenseItem title={props.items[2].title} 
        amount={props.items[2].amount} 
        Date={props.items[2].Date}>
  </ExpenseItem>

  <ExpenseItem title={props.items[3].title} 
        amount={props.items[3].amount} 
        Date={props.items[3].Date}>
  </ExpenseItem>
  </Card>
    )
}

export default Expenses;