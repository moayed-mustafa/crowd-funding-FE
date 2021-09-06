import React from 'react';
import "../../index.css"
const PleadgeButton = ({amount}) => {
    return (  <button variant="light" className={`btn-rounded pleadge-btn-style`}>{amount.slice(7,12)}</button>);
}

export default PleadgeButton;