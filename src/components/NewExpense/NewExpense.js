import React , {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewExpense = (props) => {

    const [isEditing , setIsEditing] = useState(false);
    const SaveExpenseDataHandler = (enteredExpenseData) => {
     
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()


        };  
        props.onAddexpense(expenseData);


        console.log(expenseData);
        setIsEditing(false)
        toast.success('Expense Added !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const startEditingHandler = () => {

        setIsEditing(true);
       
    };

    const stopEditing = () => {

        setIsEditing(false)
    }

    return(

<div className="new-expense">
    {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    <ToastContainer />
{isEditing && <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler} onCancel = {stopEditing} />}

</div>

    );

}

export default NewExpense;