import React from 'react';
import { Paper } from "@material-ui/core"
import FigureInformaiton from "../figure-information"
import {ProgressBar} from 'react-bootstrap';



const PleadgeCard = () => {
    return (
        <Paper>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain</p>
            <FigureInformaiton figure="$89,914" information="of $100,000 backed"></FigureInformaiton>
            <FigureInformaiton figure="5007" information="total backers"></FigureInformaiton>
            <FigureInformaiton figure="56" information="days left"></FigureInformaiton>
            <ProgressBar now={60}></ProgressBar>
        </Paper>

    );
}

export default PleadgeCard;

