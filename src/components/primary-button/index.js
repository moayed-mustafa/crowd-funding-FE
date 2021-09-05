import React from 'react';
import { Button } from "react-bootstrap";
import "../../index.css"

const PrimaryButton = ({text="ClickMe", handleClick}) => {
    return (
        <Button variant="primary" className={`btn-rounded btn-style`} onClick={handleClick}>{text}</Button>
    )

        ;
}

export default PrimaryButton;