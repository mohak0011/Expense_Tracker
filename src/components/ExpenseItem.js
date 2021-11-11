import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>12th November 2021 </div>
            <div classNamee='expense-item__description'>
            <h2>Car Insurance</h2>
            <div className='expense-item__price'>Rs 3000</div>
            </div>
        </div>
    
    )
}

export default ExpenseItem
