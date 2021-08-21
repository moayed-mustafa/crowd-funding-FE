import React from 'react';
import PrimaryButton from '../primary-button';
const ProductEdition = ({ product, pleadgeAmount, description, amountLeft, buttonText }) => {
    return (
        <>
        <h3>{product}</h3>
            <h3>{pleadgeAmount}</h3>
            <p>{description}</p>
            <h3>{amountLeft} <p>Left</p> </h3>
            <PrimaryButton tedxt={buttonText}></PrimaryButton>
            </>
    );
}

export default ProductEdition;