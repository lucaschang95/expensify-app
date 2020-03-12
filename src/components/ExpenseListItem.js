import React from 'react';
import { Link } from 'react-router-dom'

const ExpenseListItem = (props) => (
  <div>
    <Link to={`/edit/${props.id}`}>{props.description}</Link>
    <p>{props.amount} - {props.createdAt}</p>
  </div>
);


export default ExpenseListItem;