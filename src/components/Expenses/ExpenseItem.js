
import React , {useState} from 'react';
import './ExpenseItem.css';
import  ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


const ExpenseItem = (props) =>{

 const date = props.date;
 const title = props.title;
 const amount =  props.amount
 



    return(
            <Card className= "expense-item"> 
        <ExpenseDate dateS={date} />
        <div className="expense-item__description">
    <h2>{title}</h2>
    <div className="expense-item__price">${amount}</div>
    </div>
 </Card>
 );
    }
export default ExpenseItem;