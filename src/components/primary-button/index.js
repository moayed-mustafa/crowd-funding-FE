import React from 'react';
import { Button } from "react-bootstrap";

const PrimaryButton = ({text="ClickMe"}) => {
    return (<Button variant="primary">{text}</Button> );
}

export default PrimaryButton;