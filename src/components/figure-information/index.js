import React from "react";
import {Divider} from "@material-ui/core"
const FigureInformaiton = ({ figure, information }) => {
    return (
        <>
            <h2>{figure}</h2>
            <p>{information}</p>
            <Divider></Divider>
        </>
    );
}

export default FigureInformaiton;