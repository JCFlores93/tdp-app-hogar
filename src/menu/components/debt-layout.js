import React from 'react'

function DebtLayout(props) {
    return (
        <div>
            <p>{props.debts.date}</p>
            <p>{props.debts.amount}</p>
            <button onClick={props.showAlert}>Press me!</button>
        </div>
    )
}

export default DebtLayout