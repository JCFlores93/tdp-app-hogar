import React from 'react'

function CurrentPlanLayout(props) {
    return (
        <div>
            <p>Tu Plan: {props.product.name}</p>
            <p>Producto1: {props.product.product1}</p>
            <p>Producto2: {props.product.product2}</p>
            <p>Producto3: {props.product.product3}</p>
            {/*<button onClick={props.showAlert}>Press me!</button>*/}
        </div>
    )
}

export default CurrentPlanLayout