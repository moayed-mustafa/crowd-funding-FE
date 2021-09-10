import React, {useState} from 'react';
import "../../index.css"
const PleadgeButton = ({ amount }) => {
    // Todo: changes to be made here: 1- no need to slice, since I already have the amount in integer form and inside a state.
    // TODO: 2- I should have a function passed as a prop that will track the change to the input and update the amount of pleadged money in the header card
    const [inputValue, setInputValue] = useState({ pleadgeName: (amount.slice(8, 10)) });
    const handleChange = (e) => {
        const {value }= e.target;
        setInputValue({ pleadgeName: value });
        console.log(inputValue)
    }
    return (
        <input type="number" className="pleadge-input" value={inputValue.pleadgeName} style={{marginRight: '2px'}} onChange={handleChange} name="pleadgeName"></input>
    )
}

export default PleadgeButton;