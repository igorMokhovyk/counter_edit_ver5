import React, {useState} from "react";


function AddCounter(props) {
    const randomColorName = props.colorName;
    const [yourNumber, setYourNumber] = useState(0);
    const [numberOfPlusMinus, setNumberOfPlusMinus] = useState([1]);
    const [yourColor, setYourColor] = useState(randomColorName);


    const yourNumbersHandler = (event) => {
        setYourNumber(+event.target.value);
    }

    const numberOfPlusMinusHandler = (event) => {
        setNumberOfPlusMinus(+event.target.value);
    }

    const yourColorHandler = (event) => {
        setYourColor(event.target.value);
    }




    const addButton = () => {
        props.addCounter(yourNumber, numberOfPlusMinus, yourColor);
        setYourNumber(0);
        setNumberOfPlusMinus([1])
        setYourColor(randomColorName);
    }


    return (


        <div>
            <>
                <select onChange={yourColorHandler}>
                    <option>aliceblue</option>
                    <option>antiquewhite</option>
                    <option>aqua</option>
                    <option>azure</option>
                    <option>darkgreen</option>
                    <option>darkred</option>
                    <option>bisque</option>
                </select>
            </>
            <input placeholder='Number of + / -' onChange={numberOfPlusMinusHandler} value={numberOfPlusMinus}/>
            <input placeholder='Your Number' onChange={yourNumbersHandler} value={yourNumber}/>
            <button onClick={addButton}>Add Counter</button>
        </div>
    )
};

export default AddCounter;