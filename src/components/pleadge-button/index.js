import React, {useState} from 'react';
import "../../index.css"
const PleadgeButton = ({ amount }) => {
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