import React from "react";
// import { Divider } from "@material-ui/core"
import "../../index.css";

const FigureInformaiton = ({ figure, information }) => {
    return (
        <div className="pleadge-info">
            <h2>{figure}</h2>
            <p  className="paragraph" > {information}</p>
            {/* <Divider></Divider> */}
        </div>
    );
}

export default FigureInformaiton;