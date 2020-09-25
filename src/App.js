import React, {useState} from 'react';
import './App.css';
import ButtonsPlusMinus from "./ButtonsPlusMinus";
import AddCounter from "./AddCounter";


const counters =
          [{
              id: 1,
              color: 'blue',
              value: 0,
              numberOfButtons: [1]
          },
              {
                  id: 2,
                  color: 'yellow',
                  value: 0,
                  numberOfButtons: [1]
              },
              {
                  id: 3,
                  color: 'red',
                  value: 0,
                  numberOfButtons: [1]
              }];


const colors = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure",
    "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood",
    "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan",
    "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen",
    "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray"]
let colorName  = colors[Math.floor(Math.random() * (colors.length))];


function App() {
    const [counterList, setCounterList] = useState(counters);


    const buttonPlusMinus = ((id, elem) => {
        const buttonPlusMinusCopy = counterList.map(el => {
            if (id === el.id) {
                return {...el, value: el.value + elem};
            }
            return el;
        })
        setCounterList(buttonPlusMinusCopy)
    });


    const deleteButton = (id) => {
        const deleteButtonCopy = counterList.filter(el => id !== el.id);
        setCounterList(deleteButtonCopy)
    }


    const addCounter = (yourNumber, numberOfPlusMinus, yourColor) => {
        const addButtonsPlusAndMinus = [];
        for (let i = 1; i <= numberOfPlusMinus; i++) {
            addButtonsPlusAndMinus.push(i);
        }
        const addButtonCopy = [...counterList];
        addButtonCopy.push({
            id: Math.random(),
            color: yourColor,
            value: yourNumber,
            numberOfButtons: addButtonsPlusAndMinus
        })
        setCounterList(addButtonCopy)


    }


    return (


        <div className="App">
            <header className="App-header">
                <div>
                    <AddCounter addCounter={addCounter} colorName={colorName}/>
                </div>

                {counterList.map((el, index) => <ButtonsPlusMinus  deleteButton={deleteButton}
                                                                  buttonPlusMinus={buttonPlusMinus} el={el.value}
                                                                  id={el.id} elColor={el.color} key={el.id} numberOfButtons={el.numberOfButtons}/>)}


            </header>
        </div>
    );
}

export default App;
