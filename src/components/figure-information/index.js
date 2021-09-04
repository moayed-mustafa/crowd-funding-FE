import React from "react";
import "../../index.css";

const FigureInformaiton = ({ figure, information }) => {
    return (
        <div className="pleadge-info">
            <h2>{figure}</h2>
            <p  className="paragraph" > {information}</p>
        </div>
    );
}

export default FigureInformaiton;