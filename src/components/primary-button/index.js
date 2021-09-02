import React from 'react';
import { Button } from "react-bootstrap";
import "../../index.css"

const PrimaryButton = ({text="ClickMe"}) => {
    return (
        <Button variant="primary" className={`btn-rounded btn-text`}>{text}</Button>
    )

        ;
}

export default PrimaryButton;