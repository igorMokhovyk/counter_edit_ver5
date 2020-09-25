import React from "react";


function ButtonsPlusMinus(props) {

    const list = props.el
    const elemColor = props.elColor


    return (
        <div>
            {elemColor}
            {props.numberOfButtons.map(el => <button
                onClick={() => props.buttonPlusMinus(props.id, el)}>+{el}</button>).reverse()}
            {list}
            {props.numberOfButtons.map(el => <button
                onClick={() => props.buttonPlusMinus(props.id, -el)}>-{el}</button>)}
            <button onClick={() => props.deleteButton(props.id)}>Delete Counter</button>

        </div>
    )
};


export default ButtonsPlusMinus;